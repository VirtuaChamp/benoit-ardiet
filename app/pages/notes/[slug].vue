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
  <main v-if="note" class="pb-[120px]">
    <NuxtLink to="/notes" class="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-dim transition-colors hover:text-teal">← All notes</NuxtLink>
    <article class="pt-12">
      <span class="font-mono text-xs text-teal">{{ note.date }}</span>
      <h1 class="h-hero mt-6 max-w-[1000px] text-balance text-[clamp(44px,5.8vw,84px)] leading-[0.96]">{{ note.title }}</h1>
      <div class="mt-10 flex max-w-[720px] flex-col gap-5">
        <p v-for="(paragraph, index) in note.body" :key="index" class="text-pretty text-[17px] leading-[1.7] text-soft">
          {{ paragraph }}
        </p>
      </div>
    </article>
  </main>
</template>
