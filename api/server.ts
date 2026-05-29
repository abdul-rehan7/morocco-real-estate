import server from "../dist/server/server.js";

export const config = {
  runtime: "nodejs22.x",
};

export default async function handler(request: Request) {
  return server.fetch(request, undefined, undefined);
}