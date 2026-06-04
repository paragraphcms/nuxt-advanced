<script setup lang="ts">
import type { Page } from "@paragraphcms/client";
import { ParagraphContent } from "@paragraphcms/parser-vue";

defineProps<{
  page: Page;
}>();
</script>

<template>
  <main>
    <h1>{{ page.title }}</h1>
    <ParagraphContent :content="page.content" />
  </main>
</template>
