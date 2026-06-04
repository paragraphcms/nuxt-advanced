<script setup lang="ts">
import type { PageSummaryWithSlug } from "@paragraphcms/client";
import Blog from "../../components/blog/Blog.vue";

const { locale } = useI18n();

const { data: posts, error } = await useAsyncData<PageSummaryWithSlug[]>(
  () => `blog-posts:${locale.value}`,
  () => $fetch(`/api/${locale.value}/blog`),
);

if (error.value) {
  throw error.value;
}
</script>

<template>
  <Blog :posts="posts ?? []" />
</template>
