<script setup lang="ts">
type BlogPost = {
  id: string;
  slug: string;
  title: string;
};

const localePath = useLocalePath();

defineProps<{
  posts: BlogPost[];
}>();
</script>

<template>
  <main>
    <h1>Blog</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="localePath(`/blog/${post.slug}`)">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </main>
</template>
