import type { IncomingMessage, ServerResponse } from "node:http";

import server from "../src/server";

export const config = {
  runtime: "nodejs",
};

async function readRequestBody(request: IncomingMessage): Promise<ArrayBuffer | undefined> {
  const chunks: Buffer[] = [];

  for await (const chunk of request) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  if (chunks.length === 0) {
    return undefined;
  }

  return Buffer.concat(chunks).buffer.slice(
    Buffer.concat(chunks).byteOffset,
    Buffer.concat(chunks).byteOffset + Buffer.concat(chunks).byteLength,
  );
}

export default async function handler(request: IncomingMessage, response: ServerResponse) {
  const origin = `https://${request.headers.host ?? "localhost"}`;
  const url = new URL(request.url ?? "/", origin);
  const body = request.method && request.method !== "GET" && request.method !== "HEAD"
    ? await readRequestBody(request)
    : undefined;

  const requestInit: RequestInit & { duplex?: "half" } = {
    method: request.method,
    headers: request.headers as HeadersInit,
    body,
  };

  if (body) {
    requestInit.duplex = "half";
  }

  const webRequest = new Request(url, requestInit);

  const webResponse = await server.fetch(webRequest, undefined, undefined);

  response.statusCode = webResponse.status;
  response.statusMessage = webResponse.statusText;

  webResponse.headers.forEach((value, key) => {
    if (key.toLowerCase() === "set-cookie") {
      response.setHeader(key, webResponse.headers.getSetCookie());
      return;
    }

    response.setHeader(key, value);
  });

  if (webResponse.body == null) {
    response.end();
    return;
  }

  const buffer = Buffer.from(await webResponse.arrayBuffer());
  response.end(buffer);
}