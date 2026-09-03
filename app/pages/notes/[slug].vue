<script setup lang="ts">
import { site } from '~/data/site'
import { findNote } from '~/data/notes'

const route = useRoute()
const note = findNote(route.params.slug as string)

if (!note) {
  throw createError({ statusCode: 404, statusMessage: 'Note not found', fatal: true })
}

const canonical = `${site.url}/notes/${note.slug}`

useHead({
  title: `${note.title} · ${site.name}`,
  meta: [
    { name: 'description', content: note.summary },
    { property: 'og:title', content: note.title },
    { property: 'og:description', content: note.summary },
    { property: 'og:url', content: canonical },
    { property: 'og:type', content: 'article' }
  ],
  link: [{ rel: 'canonical', href: canonical }]
})
</script>

<template>
  <main v-if="note" class="pb-24">
    <article class="pt-12">
      <span class="stamp">{{ note.date }}</span>
      <h1 class="h-display mt-4 max-w-4xl text-balance text-4xl sm:text-5xl lg:text-6xl">{{ note.title }}</h1>
      <p v-for="(paragraph, index) in note.body" :key="index" class="mt-6 max-w-3xl text-lg leading-relaxed text-soft">
        {{ paragraph }}
      </p>
    </article>

    <nav class="mt-20 border-t border-line pt-8">
      <NuxtLink to="/notes" class="label transition-colors hover:text-text">
        All notes
      </NuxtLink>
    </nav>
  </main>
</template>
