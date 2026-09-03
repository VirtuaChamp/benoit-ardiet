<script setup lang="ts">
import { site } from '~/data/site'
import { traces } from '~/data/case-studies'
import { projects } from '~/data/projects'

const facts = [
  { label: 'Payment-partner integrations', value: '40' },
  { label: 'Stored procedures in production', value: '1,900' },
  { label: 'Requests over 24 months', value: '22.3M' },
  { label: 'Mobile app screens, four languages', value: '35' },
  { label: 'Azure bill reduction', value: '−59%' }
]

const ledger = [
  { metric: 'Deadlocks / month', before: '288', after: '4', delta: '−98.6%' },
  { metric: 'P95 response', before: '1.56 s', after: '512 ms', delta: '−67%' },
  { metric: 'Mean response', before: '448 ms', after: '190 ms', delta: '−58%' },
  { metric: 'Azure / month', before: 'CHF 3,335', after: 'CHF 1,356', delta: '−59%' },
  { metric: 'One report page', before: '66 s', after: '1 s', delta: '−98%' }
]

const areas = [
  {
    lead: 'Backend and payments',
    text: '.NET APIs and the partner integrations behind them: REST, SOAP and SFTP transports, mutual TLS, request signing, idempotency, reconciliation. About forty partners so far. I also moved identity to Keycloak and secrets to OpenBao, so nothing sensitive lives in code.'
  },
  {
    lead: 'SQL Server',
    text: 'Deadlock capture with Extended Events, Read Committed Snapshot Isolation, redesigning the transactions that collide, and the procedure and index work behind a P95 that went from 1.56 s to 512 ms.'
  },
  {
    lead: 'Mobile',
    text: 'The company\'s React Native app, written alone: 35 screens, four languages, OIDC with PKCE, biometric unlock, one pentest remediation cycle, live in both stores.'
  },
  {
    lead: 'Infrastructure and security',
    text: 'The Jenkins shared library that deploys everything, Prometheus and Grafana, OpenTelemetry, a Wazuh SIEM, Cloudflare WAF and failover, and an Azure bill cut by 59% without dropping a workload.'
  },
  {
    lead: 'Agentic coding',
    text: 'I have worked with coding agents every day since 2024. For the team that turned into a shared configuration for Claude Code, Codex and Cursor, a PR-review action, a hook that refuses commits without tests, an AI usage policy, and a monthly report to management on what it actually saves.'
  },
  {
    lead: 'Legacy modernization',
    text: 'ASP.NET WebForms moved off inline SQL onto stored procedures one page at a time, and a .NET 10 plus React path written up so the next person can repeat it. No rewrite, no big bang.'
  }
]

const pad = (index: number) => String(index + 1).padStart(2, '0')

useHead({
  link: [{ rel: 'canonical', href: site.url }]
})
</script>

<template>
  <main class="pb-[120px]">
    <section class="grid items-end gap-12 border-b border-line pb-16 pt-16 sm:pt-24 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20 lg:pb-24 lg:pt-28">
      <div class="flex flex-col gap-8">
        <div class="inline-flex items-center gap-2.5 self-start rounded-full border border-teal/30 py-1.5 pl-2.5 pr-3 font-mono text-[11px] uppercase tracking-[0.12em] text-teal-soft">
          <span class="pulse h-[7px] w-[7px] rounded-full bg-teal shadow-[0_0_12px_#5eead4]"></span>
          Open to senior / staff roles and short engagements
        </div>
        <div class="flex flex-col gap-5">
          <p class="font-mono text-xs uppercase tracking-[0.18em] text-dim">Senior Software Engineer · fintech payments</p>
          <h1 class="h-hero text-balance text-[clamp(56px,7.6vw,112px)]">Systems that <span class="text-teal">move money.</span></h1>
        </div>
        <p class="max-w-[600px] text-pretty text-[19px] leading-relaxed text-soft">
          I am the engineer behind a Swiss money-transfer platform: the .NET APIs and their forty payment-partner
          integrations, a SQL Server database with 1,900 stored procedures, the mobile app in both stores,
          the Jenkins pipelines, and the Azure bill. Since 2023, from Quito.
        </p>
        <div class="flex flex-wrap items-center gap-4">
          <a :href="`mailto:${site.email}`" class="btn-teal">Email me <span aria-hidden="true">→</span></a>
          <NuxtLink to="/#incidents" class="btn-ghost">Read the incidents</NuxtLink>
        </div>
      </div>

      <aside class="flex flex-col font-mono">
        <div class="flex items-baseline justify-between border-b border-line pb-3.5 text-[11px] uppercase tracking-[0.14em] text-dim">
          <span>At a glance</span>
          <span class="text-teal">Quito · UTC−5</span>
        </div>
        <dl>
          <div v-for="fact in facts" :key="fact.label" class="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-line py-4">
            <dt class="font-sans text-sm text-soft">{{ fact.label }}</dt>
            <dd class="font-display text-[26px] font-bold leading-none tracking-[-0.02em] text-bright tabular-nums">{{ fact.value }}</dd>
          </div>
        </dl>
        <p class="mt-3.5 text-[11px] leading-relaxed text-dim">EN · FR · ES — US Eastern hours.</p>
      </aside>
    </section>

    <section id="evidence" class="scroll-mt-20 border-b border-line py-16 lg:py-24">
      <div class="grid items-start gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
        <div class="flex flex-col gap-4 lg:sticky lg:top-[104px]">
          <p class="eyebrow">01 — Evidence</p>
          <h2 class="h-display text-balance text-[40px]">The numbers first.</h2>
          <p class="text-pretty text-soft">When something in that system misbehaves, I get the call. Production, 24 months, 22.3M requests.</p>
          <p class="mt-2 font-mono text-[11px] leading-relaxed text-dim">Sources: Extended Events captures, telemetry export, Microsoft invoices Sep 2024 vs May 2026, commit history. On a call I open the dashboard.</p>
        </div>
        <div class="panel overflow-x-auto">
          <div class="grid min-w-[520px] grid-cols-[minmax(120px,1fr)_auto_auto_auto] gap-6 border-b border-line px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
            <span>Metric</span><span class="text-right">Before</span><span class="text-right text-teal">After</span><span class="text-right">Change</span>
          </div>
          <div v-for="row in ledger" :key="row.metric" class="grid min-w-[520px] grid-cols-[minmax(120px,1fr)_auto_auto_auto] items-baseline gap-6 border-b border-line px-6 py-5 transition-colors hover:bg-teal/[0.04]">
            <span class="text-[15px] text-text">{{ row.metric }}</span>
            <span class="text-right font-mono text-[15px] text-dim line-through decoration-dim/60 tabular-nums">{{ row.before }}</span>
            <span class="text-right font-display text-[28px] font-bold leading-none tracking-[-0.02em] text-teal tabular-nums">{{ row.after }}</span>
            <span class="text-right font-mono text-xs text-teal-soft tabular-nums">{{ row.delta }}</span>
          </div>
          <div class="flex min-w-[520px] justify-between px-6 py-3.5 font-mono text-[11px] text-dim">
            <span>production · 24 months · 22.3M requests</span>
            <span class="text-teal">● live</span>
          </div>
        </div>
      </div>
    </section>

    <section id="incidents" class="scroll-mt-20 border-b border-line py-16 lg:py-24">
      <div class="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div class="flex flex-col gap-4">
          <p class="eyebrow">02 — Incidents and builds</p>
          <h2 class="h-display text-[40px]">Four traces, up close.</h2>
        </div>
        <p class="max-w-[420px] text-pretty text-soft">Each one is written the same way: the problem, what I did, where it landed, and the evidence I still have.</p>
      </div>
      <ol class="grid gap-5 md:grid-cols-2">
        <li v-for="(study, index) in traces" :key="study.slug" class="flex">
          <NuxtLink :to="`/work/${study.slug}`" class="card grid w-full gap-6 p-6 text-text sm:grid-cols-[72px_1fr] sm:p-7">
            <div class="flex flex-col gap-2 font-mono">
              <span class="font-display text-[40px] font-bold leading-none tracking-[-0.03em] text-teal/55">{{ pad(index) }}</span>
              <span class="text-[11px] text-dim">{{ study.ref }}</span>
            </div>
            <div class="flex min-w-0 flex-col gap-3.5">
              <div class="flex flex-wrap justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.1em]">
                <span class="text-dim">{{ study.kicker }}</span>
                <span class="text-teal">{{ study.when }}</span>
              </div>
              <span class="font-display text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-balance text-bright">{{ study.title }}</span>
              <span class="text-pretty text-[15px] leading-relaxed text-soft">{{ study.summary }}</span>
              <span class="mt-auto pt-2 font-mono text-xs text-teal">Read the trace →</span>
            </div>
          </NuxtLink>
        </li>
      </ol>
    </section>

    <section id="work" class="scroll-mt-20 border-b border-line py-16 lg:py-24">
      <div class="grid items-start gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
        <div class="flex flex-col gap-4 lg:sticky lg:top-[104px]">
          <p class="eyebrow">03 — Areas of work</p>
          <h2 class="h-display text-[40px]">Six things I own.</h2>
        </div>
        <dl class="flex flex-col border-t border-line">
          <div v-for="(area, index) in areas" :key="area.lead" class="grid gap-3 border-b border-line py-6 transition-colors hover:bg-teal/[0.03] sm:grid-cols-[40px_220px_1fr] sm:gap-6">
            <span class="pt-1.5 font-mono text-xs text-teal">{{ pad(index) }}</span>
            <dt class="font-display text-xl font-bold leading-snug text-bright">{{ area.lead }}</dt>
            <dd class="text-pretty text-[15px] leading-relaxed text-soft">{{ area.text }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="border-b border-line py-16 lg:py-24">
      <div class="mb-10 flex flex-col gap-4">
        <p class="eyebrow">04 — Open source</p>
        <h2 class="h-display text-[40px]">Things I built to learn from.</h2>
      </div>
      <ul class="grid gap-5 md:grid-cols-3">
        <li v-for="project in projects" :key="project.name" class="flex">
          <a :href="project.href" target="_blank" rel="me" class="flex w-full flex-col gap-4 border border-line p-6 text-text transition-[border-color,transform] duration-150 hover:-translate-y-0.5 hover:border-teal/50">
            <div class="flex items-baseline justify-between gap-3">
              <span class="font-mono text-[15px] text-bright">{{ project.name }}</span>
              <span class="font-mono text-xs text-teal">↗</span>
            </div>
            <p class="text-pretty text-sm leading-relaxed text-soft">{{ project.text }}</p>
            <div class="mt-auto flex flex-wrap gap-1.5">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </a>
        </li>
      </ul>
    </section>

    <section class="grid items-start gap-10 pt-16 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16 lg:pt-24">
      <div class="flex flex-col gap-4">
        <p class="eyebrow">05 — Who is writing this</p>
        <h2 class="h-display text-[40px]">Restaurants, then production.</h2>
      </div>
      <div class="flex max-w-[640px] flex-col gap-5 text-pretty text-[17px] leading-[1.65] text-soft">
        <p>
          Before software I ran restaurants in France for six years, which turns out to be decent training for
          production incidents. I taught myself to code, moved to Ecuador, and joined Capital Services through its
          call center in 2023. Within a month I was committing code. Associate degree in Computer Science in 2026,
          BSc finishing in 2027.
        </p>
        <p>
          The numbers above come out of telemetry exports, Microsoft invoices and Extended Events captures,
          which I still have.
        </p>
      </div>
    </section>

    <section class="panel-strong mt-[120px] grid items-end gap-12 p-8 sm:p-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
      <div class="flex flex-col gap-5">
        <h2 class="h-hero text-[clamp(44px,5.5vw,72px)] leading-[0.95]">Get in touch.</h2>
        <p class="max-w-[560px] text-pretty text-[17px] text-soft">
          Email is best. I answer within a day, in English, French or Spanish. I also take the occasional short
          engagement on SQL Server performance or Azure cost when it does not conflict with the day job.
        </p>
      </div>
      <div class="flex flex-col items-start gap-4">
        <a :href="`mailto:${site.email}`" class="btn-teal px-6 py-4 font-mono">{{ site.email }}</a>
        <div class="flex flex-col gap-2.5 font-mono text-[13px]">
          <a :href="site.linkedin" target="_blank" rel="me" class="text-dim underline underline-offset-4 transition-colors hover:text-bright">linkedin.com/in/benoit-ardiet ↗</a>
          <a :href="site.github" target="_blank" rel="me" class="text-dim underline underline-offset-4 transition-colors hover:text-bright">github.com/VirtuaChamp ↗</a>
        </div>
      </div>
    </section>
  </main>
</template>
