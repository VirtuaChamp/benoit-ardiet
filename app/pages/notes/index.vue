<script setup lang="ts">
import { site } from '~/data/site'
import { notes } from '~/data/notes'

const canonical = `${site.url}/notes`

useHead({
  title: `Notes · ${site.name}`,
  meta: [
    { name: 'description', content: 'Notes on SQL Server performance, payment integrations and running production systems that move money.' },
    { property: 'og:title', content: `Notes · ${site.name}` },
    { property: 'og:url', content: canonical }
  ],
  link: [{ rel: 'canonical', href: canonical }]
})
</script>

<template>
  <main class="pb-[120px]">
    <section class="pt-16">
      <p class="eyebrow">Notes</p>
      <h1 class="h-hero mt-5 text-[clamp(44px,5.8vw,84px)] leading-[0.96]">Things worth writing down.</h1>

      <ul v-if="notes.length" class="mt-12 border-t border-line">
        <li v-for="note in notes" :key="note.slug" class="border-b border-line">
          <NuxtLink :to="`/notes/${note.slug}`" class="group flex flex-col gap-2 py-6">
            <span class="font-mono text-xs text-teal">{{ note.date }}</span>
            <span class="font-display text-[26px] font-bold leading-tight tracking-[-0.02em] text-bright transition-colors group-hover:text-teal">{{ note.title }}</span>
            <span class="text-pretty leading-relaxed text-soft">{{ note.summary }}</span>
          </NuxtLink>
        </li>
      </ul>

      <p v-else class="mt-10 max-w-[560px] text-pretty text-[17px] leading-relaxed text-soft">
        Nothing published here yet. The four traces on the home page are the writing so far.
      </p>
    </section>
  </main>
</template>
