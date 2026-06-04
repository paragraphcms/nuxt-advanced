import { seo } from "../../../paragraph.config";

export default defineEventHandler(async () =>
  new Response(await seo.rssXml({ route: "blog" }), {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
    },
  }),
);
