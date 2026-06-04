import { createError, getRouterParam } from "h3";
import { seo } from "../../../../paragraph.config";

export default defineEventHandler(async (event) => {
  const locale = getRouterParam(event, "locale")?.trim();

  if (!locale) {
    throw createError({
      statusCode: 404,
      statusMessage: "Not Found",
    });
  }

  return new Response(
    await seo.rssXml({
      locale,
      route: "blog",
    }),
    {
      headers: {
        "content-type": "application/rss+xml; charset=utf-8",
      },
    },
  );
});
