<script setup lang="ts">
import { site } from '~/data/site'
import { caseStudies, findCaseStudy } from '~/data/case-studies'

const route = useRoute()
const study = findCaseStudy(route.params.slug as string)

if (!study) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found', fatal: true })
}

const sections = [
  { label: 'The problem', text: study.challenge },
  { label: 'What I did', text: study.approach },
  { label: 'Where it landed', text: study.result }
]

const canonical = `${site.url}/work/${study.slug}`

useHead({
  title: `${study.title} · ${site.name}`,
  meta: [
    { name: 'description', content: study.summary },
    { property: 'og:title', content: study.title },
    { property: 'og:description', content: study.summary },
    { property: 'og:url', content: canonical },
    { property: 'og:type', content: 'article' }
  ],
  link: [{ rel: 'canonical', href: canonical }]
})
</script>

<template>
  <main v-if="study" class="pb-24">
    <article class="pt-12">
      <p class="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">{{ study.kicker }}</p>
      <h1 class="mt-3 text-3xl sm:text-4xl font-bold leading-tight text-balance">{{ study.title }}</h1>
      <p class="mt-8 text-lg leading-relaxed">{{ study.summary }}</p>

      <section v-for="section in sections" :key="section.label" class="mt-12">
        <h2 class="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">{{ section.label }}</h2>
        <p class="mt-3 leading-relaxed text-zinc-700">{{ section.text }}</p>
      </section>

      <section class="mt-12 border-t border-zinc-200 pt-6">
        <h2 class="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">Evidence</h2>
        <p class="mt-3 leading-relaxed text-zinc-700">{{ study.evidence }}</p>
        <p v-if="study.links.length" class="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          <a
            v-for="link in study.links"
            :key="link.href"
            :href="link.href"
            target="_blank"
            class="text-[#d30c13] underline underline-offset-4"
          >{{ link.label }} ↗</a>
        </p>
      </section>
    </article>

    <section class="mt-20 border-t border-zinc-300 pt-12">
      <h2 class="text-2xl font-bold">Recognise any of this?</h2>
      <p class="mt-4 leading-relaxed text-zinc-700">
        Write me two paragraphs about what hurts. I will answer honestly, including when the answer is
        that you do not need me.
      </p>
      <div class="mt-8">
        <UButton :to="`mailto:${site.email}`" :label="site.email" color="neutral" variant="solid" size="lg" class="rounded-none px-6 font-mono" />
      </div>
    </section>

    <nav class="mt-20 border-t border-zinc-200 pt-8">
      <p class="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">Other work</p>
      <ul class="mt-4 space-y-3">
        <li v-for="other in caseStudies.filter(item => item.slug !== study.slug)" :key="other.slug">
          <NuxtLink :to="`/work/${other.slug}`" class="leading-relaxed underline underline-offset-4 transition-colors hover:text-[#d30c13]">
            {{ other.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </main>
</template>
