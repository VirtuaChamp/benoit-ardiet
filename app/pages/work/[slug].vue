<script setup lang="ts">
import { site } from '~/data/site'
import { traces, findCaseStudy } from '~/data/case-studies'

const route = useRoute()
const study = findCaseStudy(route.params.slug as string)

if (!study) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found', fatal: true })
}

const position = traces.findIndex(item => item.slug === study.slug)
const pad = (index: number) => String(index + 1).padStart(2, '0')
const number = pad(position)

const sections = [
  { n: '01', id: 'problem', label: 'The problem', text: study.challenge },
  { n: '02', id: 'approach', label: 'What I did', text: study.approach },
  { n: '03', id: 'result', label: 'Where it landed', text: study.result }
]

const others = traces
  .map((item, index) => ({ ...item, n: pad(index) }))
  .filter(item => item.slug !== study.slug)

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
  <main v-if="study" class="pb-[120px]">
    <NuxtLink to="/#incidents" class="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-dim transition-colors hover:text-teal">← All traces</NuxtLink>

    <article class="pt-12">
      <div class="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
        <span class="rounded-[2px] border border-teal/35 px-2.5 py-[5px] text-teal">Trace {{ number }}</span>
        <span class="text-dim">{{ study.ref }}</span>
        <span class="text-line">/</span>
        <span class="text-dim">{{ study.kicker }}</span>
        <span class="text-line">/</span>
        <span class="text-dim">{{ study.when }}</span>
      </div>
      <h1 class="h-hero mt-7 max-w-[1000px] text-balance text-[clamp(44px,5.8vw,84px)] leading-[0.96]">{{ study.title }}</h1>

      <div class="mt-10 grid items-end gap-10 border-b border-line pb-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
        <p class="max-w-[640px] text-pretty text-[19px] leading-relaxed text-soft">{{ study.summary }}</p>
        <div class="panel grid grid-cols-2">
          <div class="flex flex-col gap-2 border-r border-line px-6 py-5">
            <span class="label">{{ study.stat.beforeLabel }}</span>
            <span class="font-display text-[44px] font-bold leading-none tracking-[-0.03em] text-dim line-through decoration-2">{{ study.stat.before }}</span>
            <span class="text-[13px] text-dim">{{ study.stat.beforeUnit }}</span>
          </div>
          <div class="flex flex-col gap-2 px-6 py-5">
            <span class="label text-teal">{{ study.stat.afterLabel }}</span>
            <span class="font-display text-[44px] font-bold leading-none tracking-[-0.03em] text-teal">{{ study.stat.after }}</span>
            <span class="text-[13px] text-dim">{{ study.stat.afterUnit }}</span>
          </div>
        </div>
      </div>

      <div class="grid gap-10 pt-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
        <nav class="flex flex-col gap-1 self-start font-mono text-xs lg:sticky lg:top-[104px]">
          <span class="label pb-3">On this page</span>
          <a v-for="section in sections" :key="section.id" :href="`#${section.id}`" class="flex gap-3 border-l border-line py-2 pl-3.5 text-dim transition-colors hover:border-teal hover:text-bright">
            <span class="text-teal">{{ section.n }}</span>{{ section.label }}
          </a>
          <a href="#evidence" class="flex gap-3 border-l border-line py-2 pl-3.5 text-dim transition-colors hover:border-teal hover:text-bright">
            <span class="text-teal">04</span>Evidence
          </a>
        </nav>
        <div class="flex max-w-[720px] flex-col gap-14">
          <section v-for="section in sections" :id="section.id" :key="section.id" class="flex scroll-mt-[110px] flex-col gap-4">
            <h2 class="flex items-baseline gap-3.5 font-display text-[26px] font-bold leading-tight tracking-[-0.02em] text-bright">
              <span class="font-mono text-xs font-normal text-teal">{{ section.n }}</span>{{ section.label }}
            </h2>
            <p class="text-pretty text-[17px] leading-[1.7] text-soft">{{ section.text }}</p>
          </section>
          <section id="evidence" class="panel flex scroll-mt-[110px] flex-col gap-3 px-8 py-7">
            <h2 class="flex items-baseline gap-3.5 font-display text-[22px] font-bold tracking-[-0.02em] text-bright">
              <span class="font-mono text-xs font-normal text-teal">04</span>Evidence
            </h2>
            <p class="leading-[1.7] text-soft">{{ study.evidence }}</p>
            <p v-if="study.links.length" class="flex flex-wrap gap-x-4 gap-y-2">
              <a v-for="link in study.links" :key="link.href" :href="link.href" target="_blank" class="font-mono text-sm text-teal underline underline-offset-4">{{ link.label }} ↗</a>
            </p>
            <p class="mt-1 font-mono text-xs text-dim">Ask for it on a call and I will open the dashboard.</p>
          </section>
        </div>
      </div>
    </article>

    <section class="panel-strong mt-[120px] flex flex-wrap items-end justify-between gap-8 p-8 sm:px-12 sm:py-14">
      <div class="flex flex-col gap-3">
        <h2 class="h-hero text-[44px] leading-none tracking-[-0.03em]">Want the longer version?</h2>
        <p class="max-w-[520px] text-pretty text-[17px] text-soft">Email me and I will walk you through it, captures and dashboards included.</p>
      </div>
      <a :href="`mailto:${site.email}`" class="btn-teal px-6 py-4 font-mono">{{ site.email }}</a>
    </section>

    <nav class="mt-24">
      <p class="eyebrow mb-5">Other traces</p>
      <ul class="flex flex-col border-t border-line">
        <li v-for="other in others" :key="other.slug">
          <NuxtLink :to="`/work/${other.slug}`" class="grid items-baseline gap-3 border-b border-line py-5 text-text transition-colors hover:text-teal sm:grid-cols-[48px_200px_1fr_auto] sm:gap-6">
            <span class="font-mono text-xs text-teal">{{ other.n }}</span>
            <span class="font-mono text-xs text-dim">{{ other.when }}</span>
            <span class="font-display text-xl font-bold tracking-[-0.02em]">{{ other.title }}</span>
            <span class="font-mono text-xs text-teal">→</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </main>
</template>
