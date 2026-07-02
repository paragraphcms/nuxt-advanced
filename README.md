# ParagraphCMS Nuxt Advanced

Ten README jest krótką dokumentacją projektu ParagraphCMS dla przykładu Nuxt Advanced. Projekt rozwija blog o lokalizacje przez `@nuxtjs/i18n`, prerenderowane trasy, RSS, `sitemap.xml`, `robots.txt`, `llms.txt` oraz generowanie dokumentów przez `@paragraphcms/seo`.

Oficjalny kontekst: [ParagraphCMS Nuxt Advanced](https://paragraphcms.com/docs/advanced/nuxt).

## Konfiguracja

1. Skopiuj `.env.example` do `.env`.
2. Ustaw `NUXT_PARAGRAPH_API_KEY` kluczem API z ParagraphCMS.
3. W ParagraphCMS utwórz kolekcję `blog`, jeśli korzystasz z domyślnej konfiguracji tras.
4. Zmień `site.url` w `paragraph.config.ts` na docelową domenę.

## Uruchomienie

```bash
pnpm install
pnpm dev
```

Build/generowanie i podgląd:

```bash
pnpm build
pnpm preview
```

Do statycznego generowania użyj:

```bash
pnpm generate
```

## Najważniejsze pliki

- `paragraph.config.ts` - klient ParagraphCMS, konfiguracja strony i SEO.
- `nuxt.config.ts` - i18n, prerendering i runtime config.
- `server/api/` - endpointy bloga dla domyślnego i lokalizowanych języków.
- `server/routes/` - RSS oraz generowane `sitemap.xml`, `robots.txt`, `llms.txt`.
