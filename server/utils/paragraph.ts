import { client } from "../../paragraph.config";

export function getParagraphClient() {
  const { paragraphApiKey } = useRuntimeConfig();
  const apiKey = paragraphApiKey?.trim();

  if (!apiKey) {
    throw new Error("NUXT_PARAGRAPH_API_KEY environment variable is not set");
  }

  return client;
}
