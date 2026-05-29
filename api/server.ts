import type { IncomingMessage, ServerResponse } from "node:http";

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

function normalizeHeaders(request: IncomingMessage): Headers {
  const headers = new Headers();

  for (const [key, value] of Object.entries(request.headers)) {
    if (value == null) {
      continue;
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(key, item);
      }
      continue;
    }

    headers.set(key, value);
  }

  return headers;
}

export default async function handler(request: IncomingMessage, response: ServerResponse) {
  try {
    const origin = `https://${request.headers.host ?? "localhost"}`;
    const url = new URL(request.url ?? "/", origin);
    const body = request.method && request.method !== "GET" && request.method !== "HEAD"
      ? await readRequestBody(request)
      : undefined;

    const requestInit: RequestInit & { duplex?: "half" } = {
      method: request.method,
      headers: normalizeHeaders(request),
      body,
    };

    if (body) {
      requestInit.duplex = "half";
    }

    const webRequest = new Request(url, requestInit);
    const serverModule = await import("../dist/server/server.js");
    const server = serverModule.default as {
      fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
    };

    const webResponse = await server.fetch(webRequest, undefined, undefined);
    const responseHeaders = Object.fromEntries(webResponse.headers.entries());

    response.writeHead(webResponse.status, responseHeaders);

    if (webResponse.body == null) {
      response.end();
      return;
    }

    const buffer = Buffer.from(await webResponse.arrayBuffer());
    response.end(buffer);
  } catch (error) {
    console.error(error);
    response.statusCode = 500;
    response.setHeader("content-type", "text/html; charset=utf-8");
    response.end("<!doctype html><html><body><h1>Internal Server Error</h1></body></html>");
  }
}