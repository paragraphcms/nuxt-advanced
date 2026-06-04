import { Client } from "@paragraphcms/client";
import { localizedContentRoute, localizedRoute, SEO } from "@paragraphcms/seo";

const env = (
  globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> };
  }
).process?.env;

const apiKey = env?.NUXT_PARAGRAPH_API_KEY?.trim() || "missing-api-key";

export const client = new Client({ apiKey });

export const site = {
  description: "Latest posts from the blog.",
  name: "Blog",
  url: "https://example.com",
};

export const seo = new SEO({
  client,
  site,
  routes: {
    home: localizedRoute("blog"),
    blog: localizedContentRoute("blog"),
  },
});
