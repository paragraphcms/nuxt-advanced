import { seo } from "../../paragraph.config";

export default defineEventHandler(async () =>
  new Response(await seo.llmsTxt(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  }),
);
