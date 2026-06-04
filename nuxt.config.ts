import { client } from "./paragraph.config";

const env = (
  globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> };
  }
).process?.env;

const apiKey = env?.NUXT_PARAGRAPH_API_KEY?.trim();

let locales = ["en"];
let defaultLocale = locales[0];

if (apiKey) {
  const [defaultLocaleResult, localesResult] = await Promise.all([
    client.locales.getDefaultLocale(),
    client.locales.list(),
  ]);

  if (defaultLocaleResult.error) {
    throw defaultLocaleResult.error;
  }

  if (localesResult.error) {
    throw localesResult.error;
  }

  defaultLocale = defaultLocaleResult.data;
  locales = Array.from(
    new Set([defaultLocale, ...localesResult.data.map(({ code }) => code)]),
  );
}

export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  runtimeConfig: {
    paragraphApiKey: env?.NUXT_PARAGRAPH_API_KEY,
  },
  i18n: {
    defaultLocale,
    detectBrowserLanguage: false,
    locales,
    rootRedirect: "blog",
    strategy: "prefix_except_default",
  },
  hooks: {
    async "prerender:routes"(ctx) {
      if (!apiKey) {
        return;
      }

      ctx.routes.add("/llms.txt");
      ctx.routes.add("/robots.txt");
      ctx.routes.add("/sitemap.xml");

      for (const locale of locales) {
        const { data: pages, error } = await client.pages.list({
          language: locale,
          requiredSlug: true,
        });

        if (error) {
          throw error;
        }

        const prefix = locale === defaultLocale ? "" : `/${locale}`;

        ctx.routes.add(`${prefix}/blog`);
        ctx.routes.add(`${prefix}/blog/rss.xml`);

        for (const page of pages) {
          ctx.routes.add(`${prefix}/blog/${page.slug}`);
        }
      }
    },
  },
  nitro: {
    prerender: {
      crawlLinks: false,
    },
  },
});
