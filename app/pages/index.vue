<script setup lang="ts">
import { site } from '~/data/site'
import { caseStudies, findCaseStudy } from '~/data/case-studies'
import { projects } from '~/data/projects'

type LedgerRow = { metric: string, before: string, after: string, width: string }

const ledger: LedgerRow[] = [
  { metric: 'Deadlocks / month', before: '288', after: '4', width: '1.4%' },
  { metric: 'P95 response', before: '1.56 s', after: '512 ms', width: '33%' },
  { metric: 'Mean response', before: '448 ms', after: '190 ms', width: '42%' },
  { metric: 'Azure / month', before: '3,335', after: 'CHF 1,356', width: '41%' },
  { metric: 'One report page', before: '66 s', after: '1 s', width: '1.5%' }
]

const timeline = ['sql-server-deadlocks', 'cloudflare-outage-continuity', 'money-transfer-mobile-app', 'redis-out-of-memory-outage']
  .map(slug => findCaseStudy(slug))
  .filter((study): study is NonNullable<typeof study> => study !== undefined)

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

useHead({
  link: [{ rel: 'canonical', href: site.url }]
})
</script>

<template>
  <main class="pb-24">
    <section class="grid items-end gap-12 pt-14 lg:grid-cols-2 lg:gap-16">
      <div class="flex flex-col gap-6">
        <p class="label text-teal">{{ site.role }}</p>
        <h1 class="h-display text-balance text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
          Systems that move money.
        </h1>
        <p class="max-w-xl text-lg leading-relaxed text-soft">
          I am the engineer behind a Swiss money-transfer platform: the .NET APIs and their forty payment-partner
          integrations, a SQL Server database with 1,900 stored procedures, the mobile app in both stores,
          the Jenkins pipelines, and the Azure bill. Since 2023, from Quito.
        </p>
        <p class="max-w-xl text-lg leading-relaxed text-soft">
          When something in that system misbehaves, I get the call. This page is the evidence: the numbers first,
          then four incidents and builds up close.
        </p>
        <div class="mt-2 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a :href="`mailto:${site.email}`" class="btn-teal">Email me</a>
          <span class="font-mono text-xs text-dim">Quito · UTC−5, US Eastern hours · EN FR ES</span>
        </div>
      </div>

      <div id="evidence" class="panel flex scroll-mt-24 flex-col gap-5 p-6">
        <div class="flex items-center justify-between font-mono text-[11px]">
          <span class="label">production · 24 months · 22.3M requests</span>
          <span class="text-teal">● live</span>
        </div>
        <dl class="flex flex-col gap-3.5">
          <div v-for="row in ledger" :key="row.metric" class="grid items-center gap-4 sm:grid-cols-[160px_1fr_150px]">
            <dt class="text-sm text-soft">{{ row.metric }}</dt>
            <dd class="bar"><span :style="{ width: row.width }"></span></dd>
            <dd class="font-mono text-sm tabular-nums sm:text-right">
              <span class="text-dim line-through">{{ row.before }}</span>
              <span class="ml-2 text-teal">{{ row.after }}</span>
            </dd>
          </div>
        </dl>
        <p class="font-mono text-[11px] leading-relaxed text-dim">
          Sources: Extended Events captures, telemetry export, Microsoft invoices Sep 2024 vs May 2026, commit history. On a call I open the dashboard.
        </p>
      </div>
    </section>

    <section id="incidents" class="mt-28 scroll-mt-24">
      <p class="label mb-7">Incidents and builds, as a trace</p>
      <ol class="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <span aria-hidden="true" class="absolute left-0 right-0 top-[7px] hidden h-px bg-teal/35 lg:block"></span>
        <li v-for="study in timeline" :key="study.slug">
          <NuxtLink :to="`/work/${study.slug}`" class="group flex h-full flex-col gap-3.5">
            <span class="box-border block h-[15px] w-[15px] rounded-full border-2 border-teal bg-navy transition-colors group-hover:bg-teal"></span>
            <span class="stamp">{{ study.when }}</span>
            <span class="h-display text-2xl leading-[1.15] transition-colors group-hover:text-teal">{{ study.title }}</span>
            <span class="text-sm leading-relaxed text-soft">{{ study.summary }}</span>
            <span class="mt-auto font-mono text-xs text-teal">Read it &rarr;</span>
          </NuxtLink>
        </li>
      </ol>
    </section>

    <section class="mt-28">
      <p class="label mb-7">Areas of work</p>
      <dl class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="area in areas" :key="area.lead" class="flex flex-col gap-2.5 border-t border-line pt-4">
          <dt class="font-display text-lg font-bold text-bright">{{ area.lead }}</dt>
          <dd class="text-sm leading-relaxed text-soft">{{ area.text }}</dd>
        </div>
      </dl>
    </section>

    <section class="mt-28">
      <p class="label mb-7">Open source · things I built to learn from</p>
      <ul class="grid gap-6 lg:grid-cols-3">
        <li v-for="project in projects" :key="project.name" class="flex flex-col gap-2.5 border-t border-line pt-4">
          <a :href="project.href" target="_blank" rel="me" class="font-mono text-base text-bright underline underline-offset-4 transition-colors hover:text-teal">{{ project.name }}</a>
          <p class="text-sm leading-relaxed text-soft">{{ project.text }}</p>
          <p class="label">{{ project.stack }}</p>
        </li>
      </ul>
    </section>

    <section class="mt-28">
      <p class="label mb-7">Who is writing this</p>
      <div class="grid gap-8 border-t border-line pt-6 lg:grid-cols-2">
        <p class="leading-relaxed text-soft">
          Before software I ran restaurants in France for six years, which turns out to be decent training for
          production incidents. I taught myself to code, moved to Ecuador, and joined Capital Services through its
          call center in 2023. Within a month I was committing code. Associate degree in Computer Science in 2026,
          BSc finishing in 2027.
        </p>
        <p class="leading-relaxed text-soft">
          The numbers above come out of telemetry exports, Microsoft invoices and Extended Events captures,
          which I still have.
        </p>
      </div>
    </section>

    <section class="mt-28 border-t border-teal/35 pt-10">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <div class="flex flex-col gap-3">
          <h2 class="h-display text-4xl">Get in touch.</h2>
          <p class="max-w-xl leading-relaxed text-soft">
            Email is best. I answer within a day, in English, French or Spanish. I also take the occasional short
            engagement on SQL Server performance or Azure cost when it does not conflict with the day job.
          </p>
        </div>
        <div class="flex flex-col items-start gap-3">
          <a :href="`mailto:${site.email}`" class="btn-teal font-mono text-sm">{{ site.email }}</a>
          <a :href="site.linkedin" target="_blank" rel="me" class="font-mono text-xs text-dim underline underline-offset-4 transition-colors hover:text-text">linkedin.com/in/benoit-ardiet</a>
          <a :href="site.github" target="_blank" rel="me" class="font-mono text-xs text-dim underline underline-offset-4 transition-colors hover:text-text">github.com/VirtuaChamp</a>
        </div>
      </div>
    </section>
  </main>
</template>
