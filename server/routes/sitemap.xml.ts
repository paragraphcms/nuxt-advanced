import { seo } from "../../paragraph.config";

export default defineEventHandler(async () =>
  new Response(await seo.sitemapXml(), {
    headers: {
      "content-type": "application/xml; charset=utf-8",
    },
  }),
);
