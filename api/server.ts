import server from "../src/server";

export const config = {
  runtime: "nodejs",
};

export default async function handler(request: Request) {
  return server.fetch(request, undefined, undefined);
}