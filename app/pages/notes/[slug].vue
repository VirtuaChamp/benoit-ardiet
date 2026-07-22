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
      <p class="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">{{ note.date }}</p>
      <h1 class="mt-3 text-3xl sm:text-4xl font-bold leading-tight text-balance">{{ note.title }}</h1>
      <p v-for="(paragraph, index) in note.body" :key="index" class="mt-6 text-lg leading-relaxed text-zinc-800">
        {{ paragraph }}
      </p>
    </article>

    <nav class="mt-20 border-t border-zinc-200 pt-8">
      <NuxtLink to="/notes" class="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600 transition-colors hover:text-zinc-900">
        All notes
      </NuxtLink>
    </nav>
  </main>
</template>
