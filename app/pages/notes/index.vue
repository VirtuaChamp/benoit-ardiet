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
      <p class="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">Notes</p>
      <h1 class="mt-3 text-3xl sm:text-4xl font-bold leading-tight">Things worth writing down.</h1>

      <ul v-if="notes.length" class="mt-12">
        <li v-for="note in notes" :key="note.slug" class="border-t border-zinc-200">
          <NuxtLink :to="`/notes/${note.slug}`" class="group block py-6 transition-colors hover:bg-zinc-900/[0.03]">
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">{{ note.date }}</p>
            <p class="mt-2 text-lg font-semibold transition-colors group-hover:text-[#d30c13]">{{ note.title }}</p>
            <p class="mt-2 leading-relaxed text-zinc-700">{{ note.summary }}</p>
          </NuxtLink>
        </li>
      </ul>

      <p v-else class="mt-8 leading-relaxed text-zinc-700">
        Nothing published here yet.
      </p>
    </section>
  </main>
</template>
