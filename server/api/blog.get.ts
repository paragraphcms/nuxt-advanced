import { defineEventHandler } from "h3";
import { getParagraphClient } from "../utils/paragraph";

export default defineEventHandler(async (event) => {
  const client = getParagraphClient();
  const locale = event.context.params?.locale;
  const { data: posts, error } = await client.pages.list({
    ...(locale ? { language: locale } : {}),
    requiredSlug: true,
  });

  if (error) {
    throw error;
  }

  return posts;
});
