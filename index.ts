import { Application, HttpError, Status } from "https://deno.land/x/oak@v6.5.0/mod.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";

import {
  bold,
  cyan,
  green,
  red,
  yellow,
} from "https://deno.land/std@0.84.0/fmt/colors.ts";

const app: Application = new Application();
let port:any = parse(Deno.args, { "--": true }).port
app.use(async (context) => {
  await context.send({
    root: `${Deno.cwd()}`,
    index: "index.html",
  });
});

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(
    bold("Start listening on ") + cyan(`${hostname}:${port}`),
  );
});

await app.listen({ hostname: "127.0.0.1", port: port || 5656 });