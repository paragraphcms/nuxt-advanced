import { createError, defineEventHandler, getRouterParam } from "h3";
import { getParagraphClient } from "../../utils/paragraph";

export default defineEventHandler(async (event) => {
  const locale = event.context.params?.locale;
  const slug = getRouterParam(event, "slug")?.trim();

  if (!slug) {
    throw createError({
      statusCode: 404,
      statusMessage: "Post not found",
    });
  }

  const client = getParagraphClient();
  const { data: pages, error } = await client.pages.list({
    ...(locale ? { language: locale } : {}),
    requiredSlug: true,
    slug,
  });

  if (error) {
    throw error;
  }

  const page = pages[0];

  if (!page) {
    throw createError({
      statusCode: 404,
      statusMessage: "Post not found",
    });
  }

  const { data: fullPage, error: fullPageError } = await client.page.get(page.id);

  if (fullPageError) {
    throw fullPageError;
  }

  return fullPage;
});
