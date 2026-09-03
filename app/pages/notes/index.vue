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
  <main class="pb-24">
    <section class="pt-12">
      <p class="label">Notes</p>
      <h1 class="h-display mt-3 text-4xl sm:text-5xl">Things worth writing down.</h1>

      <ul v-if="notes.length" class="mt-10">
        <li v-for="note in notes" :key="note.slug" class="border-t border-line">
          <NuxtLink :to="`/notes/${note.slug}`" class="group flex flex-col gap-2 py-6">
            <span class="stamp">{{ note.date }}</span>
            <span class="h-display text-2xl transition-colors group-hover:text-teal">{{ note.title }}</span>
            <span class="leading-relaxed text-soft">{{ note.summary }}</span>
          </NuxtLink>
        </li>
      </ul>

      <p v-else class="mt-8 leading-relaxed text-soft">
        Nothing published here yet.
      </p>
    </section>
  </main>
</template>
