<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <UApp>
    <div class="min-h-screen bg-[#fcfcfa] text-zinc-900 font-serif antialiased">
      <UContainer class="max-w-3xl">
        <header class="flex items-baseline justify-between py-8 font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
          <NuxtLink to="/" class="transition-colors hover:text-zinc-900">{{ site.name }}</NuxtLink>
          <a :href="`mailto:${site.email}`" class="underline underline-offset-4 transition-colors hover:text-zinc-900">{{ site.email }}</a>
        </header>

        <NuxtPage />

        <footer class="border-t border-zinc-200 py-8 font-mono text-xs text-zinc-600 flex flex-wrap justify-between gap-2">
          <span>© 2026 {{ site.name }} · {{ site.location }} · UTC−5</span>
          <span class="flex gap-4">
            <a :href="site.github" target="_blank" rel="me" class="underline underline-offset-4 transition-colors hover:text-zinc-900">GitHub</a>
            <span>No tracking, no cookies.</span>
          </span>
        </footer>
      </UContainer>
    </div>
  </UApp>
</template>
