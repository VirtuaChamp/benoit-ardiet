const url = 'https://benoitardiet.com'
const title = 'Benoit Ardiet, fintech .NET engineer'
const description = 'Freelance fintech .NET engineer. Payment API integrations, SQL Server performance rescue, legacy modernization, Azure cost review. Every result measured and verifiable.'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${url}/#person`,
      name: 'Benoit Ardiet',
      jobTitle: 'Fintech .NET Engineer',
      url,
      email: 'mailto:benoitardiet@gmail.com',
      sameAs: ['https://github.com/VirtuaChamp'],
      address: { '@type': 'PostalAddress', addressLocality: 'Quito', addressCountry: 'EC' },
      knowsLanguage: ['en', 'fr', 'es'],
      knowsAbout: [
        'SQL Server performance tuning',
        'Payment API integration',
        'ASP.NET and .NET Framework modernization',
        'Azure cost optimization',
        'React Native'
      ]
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${url}/#service`,
      name: 'Benoit Ardiet, fintech engineering',
      provider: { '@id': `${url}/#person` },
      url,
      areaServed: 'Worldwide',
      availableLanguage: ['en', 'fr', 'es'],
      serviceType: [
        'SQL Server performance rescue',
        'Payment and correspondent integrations',
        'Legacy .NET modernization',
        'Azure cost review',
        'AI adoption for regulated teams'
      ]
    }
  ]
}

export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  ui: { colorMode: false },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2026-07-03',
  devtools: { enabled: false },
  nitro: { preset: 'cloudflare_module' },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title,
      meta: [
        { name: 'description', content: description },
        { name: 'author', content: 'Benoit Ardiet' },
        { property: 'og:site_name', content: 'Benoit Ardiet' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ],
      script: [
        { type: 'application/ld+json', innerHTML: JSON.stringify(structuredData) }
      ]
    }
  }
})
