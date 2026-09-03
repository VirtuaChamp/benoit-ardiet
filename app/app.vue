<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <UApp>
    <div class="grid-paper min-h-screen bg-navy font-sans text-text antialiased">
      <UContainer class="max-w-6xl">
        <header class="flex items-center justify-between gap-6 py-7">
          <NuxtLink to="/" class="flex items-center gap-3 transition-colors hover:text-teal">
            <img src="/favicon.svg" width="28" height="28" alt="" class="shrink-0">
            <span class="font-mono text-xs uppercase tracking-[0.18em]">{{ site.name }}</span>
          </NuxtLink>
          <nav class="flex gap-6 font-mono text-xs uppercase tracking-[0.18em] text-dim">
            <NuxtLink to="/#evidence" class="transition-colors hover:text-text">Evidence</NuxtLink>
            <NuxtLink to="/#incidents" class="transition-colors hover:text-text">Incidents</NuxtLink>
            <NuxtLink to="/notes" class="transition-colors hover:text-text">Notes</NuxtLink>
            <a :href="`mailto:${site.email}`" class="text-teal transition-colors hover:text-teal-soft">Email</a>
          </nav>
        </header>

        <NuxtPage />

        <footer class="flex flex-wrap justify-between gap-2 border-t border-line py-8 font-mono text-xs text-dim">
          <span>© 2026 {{ site.name }} · {{ site.location }} · UTC−5</span>
          <span class="flex gap-4">
            <a :href="site.github" target="_blank" rel="me" class="underline underline-offset-4 transition-colors hover:text-text">GitHub</a>
            <a :href="site.linkedin" target="_blank" rel="me" class="underline underline-offset-4 transition-colors hover:text-text">LinkedIn</a>
            <span>No tracking, no cookies.</span>
          </span>
        </footer>
      </UContainer>
    </div>
  </UApp>
</template>
