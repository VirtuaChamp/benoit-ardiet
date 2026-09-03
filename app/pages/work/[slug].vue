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
      <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span class="label">{{ study.kicker }}</span>
        <span class="stamp">{{ study.when }}</span>
      </div>
      <h1 class="h-display mt-5 max-w-4xl text-balance text-4xl sm:text-5xl lg:text-6xl">{{ study.title }}</h1>
      <p class="mt-8 max-w-3xl text-lg leading-relaxed text-soft">{{ study.summary }}</p>

      <section v-for="section in sections" :key="section.label" class="mt-12 grid gap-x-8 gap-y-2 border-t border-line pt-6 sm:grid-cols-[220px_1fr]">
        <h2 class="label">{{ section.label }}</h2>
        <p class="max-w-3xl leading-relaxed text-soft">{{ section.text }}</p>
      </section>

      <section class="panel mt-12 grid gap-x-8 gap-y-2 p-6 sm:grid-cols-[196px_1fr]">
        <h2 class="label">Evidence</h2>
        <div class="flex flex-col gap-3">
          <p class="max-w-3xl leading-relaxed text-soft">{{ study.evidence }}</p>
          <p v-if="study.links.length" class="flex flex-wrap gap-x-4 gap-y-2">
            <a
              v-for="link in study.links"
              :key="link.href"
              :href="link.href"
              target="_blank"
              class="font-mono text-sm text-teal underline underline-offset-4"
            >{{ link.label }} ↗</a>
          </p>
        </div>
      </section>
    </article>

    <section class="mt-20 flex flex-wrap items-end justify-between gap-6 border-t border-teal/35 pt-10">
      <div class="flex flex-col gap-2">
        <h2 class="h-display text-3xl">Want the longer version?</h2>
        <p class="leading-relaxed text-soft">Email me and I will walk you through it, captures and dashboards included.</p>
      </div>
      <a :href="`mailto:${site.email}`" class="btn-teal font-mono text-sm">{{ site.email }}</a>
    </section>

    <nav class="mt-20 border-t border-line pt-8">
      <p class="label">Other traces</p>
      <ul class="mt-4 space-y-3">
        <li v-for="other in caseStudies.filter(item => item.slug !== study.slug)" :key="other.slug" class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span class="stamp">{{ other.when }}</span>
          <NuxtLink :to="`/work/${other.slug}`" class="leading-relaxed underline underline-offset-4 transition-colors hover:text-teal">
            {{ other.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </main>
</template>
