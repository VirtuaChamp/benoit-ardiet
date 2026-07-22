<script setup lang="ts">
import { site } from '~/data/site'
import { caseStudies } from '~/data/case-studies'

type LedgerRow = { metric: string, before: string, after: string, evidence: string }

const ledger: LedgerRow[] = [
  { metric: 'Production deadlocks', before: '288 / month', after: '≈ 4 / month', evidence: 'Extended Events captures; alerting still live' },
  { metric: 'P95 response time', before: '1.56 s', after: '512 ms', evidence: '24 months of telemetry, 22.3M requests' },
  { metric: 'Mean response time', before: '448 ms', after: '190 ms', evidence: 'Same telemetry, on a dashboard I built' },
  { metric: 'Monthly Azure bill', before: 'CHF 3,335', after: 'CHF 1,356', evidence: 'Microsoft invoices, Sep 2024 vs May 2026' },
  { metric: 'One reporting page', before: '66 s', after: '≈ 1 s', evidence: 'Commit history, timed before and after' }
]

const services = [
  {
    lead: 'SQL Server performance rescue',
    text: 'The slow queries, the month-end deadlocks, the page everyone avoids clicking. Fixed-price audit first, then remediation, with a measured before and after.'
  },
  {
    lead: 'Payment and correspondent integrations',
    text: 'Partner APIs that move money: REST, SOAP and SFTP transports, mutual TLS, request signing, idempotency, reconciliation. I have built about forty of them.'
  },
  {
    lead: 'Legacy .NET modernization',
    text: 'WebForms and .NET Framework systems kept alive and moved forward step by step. No rewrite, no big bang.'
  },
  {
    lead: 'Azure cost review',
    text: 'Reservations, rightsizing, and enough governance that it does not creep back. I cut a production fintech bill by 59% without dropping a workload.'
  },
  {
    lead: 'AI adoption for regulated teams',
    text: 'Hands-on training in English, French or Spanish, with the guardrails to go around it, so your developers get the speed without AI tooling ever touching customer data.'
  }
]

useHead({
  link: [{ rel: 'canonical', href: site.url }]
})
</script>

<template>
  <main class="pb-24">
    <section class="pt-12">
      <h1 class="text-4xl sm:text-5xl font-bold leading-tight text-balance">
        I fix production systems that move money.
      </h1>
      <p class="mt-8 text-lg leading-relaxed">
        For three years I have owned a Swiss money-transfer platform end to end: forty payment-partner
        integrations, a SQL Server database of 1,900 stored procedures, the mobile app in both stores,
        and the Azure bill.
      </p>
      <p class="mt-4 text-lg leading-relaxed">
        If your revenue runs through a system nobody dares to touch, that is my lane. The query that got slow,
        the deadlocks at month-end, the partner API that fails silently at 2am, the cloud bill that quietly doubled.
      </p>
      <div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <UButton :to="`mailto:${site.email}`" label="Tell me what hurts" color="neutral" variant="solid" size="lg" class="rounded-none px-6" />
        <span class="font-mono text-xs text-zinc-600">I reply within 24 hours · UTC−5, US Eastern hours · EN FR ES</span>
      </div>
    </section>

    <section class="mt-24">
      <p class="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">Results</p>
      <h2 class="mt-3 text-2xl sm:text-3xl font-bold">The numbers I can prove.</h2>
      <div class="mt-8 overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="font-mono text-xs uppercase tracking-wider text-zinc-600">
              <th class="border-b border-zinc-300 py-3 pr-4 font-normal">Metric</th>
              <th class="border-b border-zinc-300 py-3 pr-4 font-normal">Before</th>
              <th class="border-b border-zinc-300 py-3 pr-4 font-normal">After</th>
              <th class="border-b border-zinc-300 py-3 font-normal">Evidence</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in ledger" :key="row.metric" class="align-baseline transition-colors hover:bg-zinc-900/[0.03]">
              <td class="border-b border-zinc-200 py-4 pr-4 font-medium">{{ row.metric }}</td>
              <td class="border-b border-zinc-200 py-4 pr-4 font-mono text-sm text-zinc-600 tabular-nums whitespace-nowrap">{{ row.before }}</td>
              <td class="border-b border-zinc-200 py-4 pr-4 font-mono text-sm font-semibold text-[#d30c13] tabular-nums whitespace-nowrap">{{ row.after }}</td>
              <td class="border-b border-zinc-200 py-4 text-sm text-zinc-600">{{ row.evidence }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="mt-4 font-mono text-xs text-zinc-600">
        All from one production platform, over three years. On a call I can open any of these and show you where the number comes from.
      </p>
    </section>

    <section class="mt-24">
      <p class="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">Services</p>
      <h2 class="mt-3 text-2xl sm:text-3xl font-bold">What I take on.</h2>
      <dl class="mt-8">
        <div v-for="service in services" :key="service.lead" class="grid sm:grid-cols-[240px_1fr] gap-x-8 gap-y-1 border-t border-zinc-200 py-6">
          <dt class="font-semibold">{{ service.lead }}</dt>
          <dd class="text-zinc-700 leading-relaxed">{{ service.text }}</dd>
        </div>
      </dl>
    </section>

    <section class="mt-24">
      <p class="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">Method</p>
      <h2 class="mt-3 text-2xl sm:text-3xl font-bold">How an engagement works.</h2>
      <p class="mt-8 leading-relaxed text-zinc-700">
        Diagnosis first, at a fixed price: I audit the system, write up what I found with the evidence,
        and give you a plan ranked by impact. If you want the fixes done, we agree a scope and I do the work,
        measured against the same numbers. When I leave, you keep the dashboards, the alerts and the documentation.
        No lock-in by obscurity.
      </p>
      <p class="mt-4 leading-relaxed text-zinc-700">
        What I am not: an agency. There are no juniors behind me and no handoffs. I take two clients at a time,
        I work remote from Quito on US Eastern hours, and if your problem is not something I have actually
        done before, I will tell you on the first call.
      </p>
    </section>

    <section class="mt-24">
      <p class="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">Selected work</p>
      <h2 class="mt-3 text-2xl sm:text-3xl font-bold">Four of them, up close.</h2>
      <ul class="mt-8">
        <li v-for="study in caseStudies" :key="study.slug" class="border-t border-zinc-200">
          <NuxtLink :to="`/work/${study.slug}`" class="group block py-6 transition-colors hover:bg-zinc-900/[0.03]">
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">{{ study.kicker }}</p>
            <p class="mt-2 text-lg font-semibold group-hover:text-[#d30c13] transition-colors">{{ study.title }}</p>
            <p class="mt-2 leading-relaxed text-zinc-700">{{ study.summary }}</p>
            <span class="mt-3 inline-block font-mono text-xs text-[#d30c13]">Read it &rarr;</span>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section class="mt-24">
      <p class="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">About</p>
      <h2 class="mt-3 text-2xl sm:text-3xl font-bold">Who is writing this.</h2>
      <p class="mt-8 leading-relaxed text-zinc-700">
        Before software I ran restaurants in France, which turns out to be decent training for production
        incidents. Since 2023 I have been the engineer a Swiss fintech calls when the system that moves the
        money misbehaves. Associate degree in Computer Science in 2026, BSc in progress. The numbers above
        come out of telemetry exports, Microsoft invoices and Extended Events captures, which I still have.
      </p>
    </section>

    <section class="mt-24 border-t border-zinc-300 pt-12">
      <h2 class="text-2xl sm:text-3xl font-bold">Have a system that needs fixing?</h2>
      <p class="mt-4 leading-relaxed text-zinc-700">
        Write me two paragraphs about what hurts. I will answer honestly, including when the answer is
        that you do not need me.
      </p>
      <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        <UButton :to="`mailto:${site.email}`" :label="site.email" color="neutral" variant="solid" size="lg" class="rounded-none px-6 font-mono" />
        <span class="font-mono text-xs text-zinc-600">I reply within 24 hours.</span>
      </div>
      <p class="mt-6 font-mono text-xs text-zinc-600">
        Or read the code:
        <a :href="site.github" target="_blank" rel="me" class="underline underline-offset-4 transition-colors hover:text-zinc-900">github.com/VirtuaChamp</a>
      </p>
    </section>
  </main>
</template>
