import { Handlers, STATUS_CODE } from "$fresh/server.ts";
import { SMTPClient } from "smtp";
import { generate } from "../../utils/generate.ts";

export const handler: Handlers = {
  async POST(request: Request) {
    const client = new SMTPClient({
      connection: {
        hostname: Deno.env.get("hostname")!,
        port: +Deno.env.get("port")!,
        tls: true,
        auth: {
          username: Deno.env.get("username")!,
          password: await generate(Deno.env.get("password")!),
        },
      },
    });
    const payload: { mail: string; message: string; tel: string } | undefined =
      await request.json();
    if (payload) {
      try {
        await client.send({
          from: Deno.env.get("from")!,
          to: Deno.env.get("to")!,
          subject: `Nouvel email de ${payload.mail} ${payload.tel}`,
          content: payload.message,
        });
        await client.close();
        return new Response("", { status: STATUS_CODE.OK });
      } catch (_) {
        return new Response("", { status: STATUS_CODE.BadRequest });
      }
    }
    return new Response("", { status: STATUS_CODE.NoContent });
  },
};
