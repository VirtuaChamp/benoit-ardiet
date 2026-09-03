<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <UApp>
    <div class="site-bg min-h-screen font-sans text-base leading-relaxed text-text antialiased">
      <header class="sticky top-0 z-10 border-b border-line/70 bg-navy/[0.72] backdrop-blur-md">
        <div class="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-[18px] sm:px-10">
          <NuxtLink to="/" class="flex items-center gap-3 text-text transition-colors hover:text-teal">
            <img src="/favicon.svg" width="26" height="26" alt="" class="shrink-0">
            <span class="font-mono text-xs uppercase tracking-[0.16em]">{{ site.name }}</span>
          </NuxtLink>
          <nav class="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.12em] text-dim sm:gap-7">
            <NuxtLink to="/#evidence" class="hidden transition-colors hover:text-bright sm:inline">Evidence</NuxtLink>
            <NuxtLink to="/#incidents" class="transition-colors hover:text-bright">Incidents</NuxtLink>
            <NuxtLink to="/#work" class="hidden transition-colors hover:text-bright sm:inline">Work</NuxtLink>
            <NuxtLink to="/notes" class="transition-colors hover:text-bright">Notes</NuxtLink>
            <a :href="`mailto:${site.email}`" class="rounded-full border border-teal/45 px-4 py-2 tracking-[0.08em] text-bright transition-[background-color,border-color,color] duration-150 hover:border-teal hover:bg-teal/12 hover:text-teal-soft">Email</a>
          </nav>
        </div>
      </header>

      <div class="mx-auto max-w-[1200px] px-6 sm:px-10">
        <NuxtPage />
      </div>

      <footer class="border-t border-line">
        <div class="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-3 px-6 py-8 font-mono text-xs text-dim sm:px-10">
          <span>© 2026 {{ site.name }} · {{ site.location }} · UTC−5</span>
          <span class="flex gap-5">
            <a :href="site.github" target="_blank" rel="me" class="transition-colors hover:text-bright">GitHub</a>
            <a :href="site.linkedin" target="_blank" rel="me" class="transition-colors hover:text-bright">LinkedIn</a>
            <span>No tracking, no cookies.</span>
          </span>
        </div>
      </footer>
    </div>
  </UApp>
</template>
