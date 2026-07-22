export type CaseStudyLink = { label: string, href: string }

export type CaseStudy = {
  slug: string
  title: string
  kicker: string
  summary: string
  challenge: string
  approach: string
  result: string
  evidence: string
  links: CaseStudyLink[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'sql-server-deadlocks',
    title: 'From 288 deadlocks a month to about four',
    kicker: 'SQL Server, Swiss money-transfer platform',
    summary: 'Read Committed Snapshot Isolation and a redesign of the worst transactions, but the part that made it possible was capturing the deadlocks properly first.',
    challenge: 'Month-end was the bad time. The platform was logging 288 deadlocks a month, and 53 on the worst single day. Transfers failed with errors that meant nothing to the cashier, support retried them by hand, and nobody could say which transactions were colliding, because nothing was capturing them.',
    approach: 'I set up an Extended Events session to record every deadlock graph in production. That gave me a ranked list of what was actually colliding, which is a better basis for a decision than anyone\'s theory about it. Two changes came out of the list. The database moved to Read Committed Snapshot Isolation so readers stopped blocking writers, and the transactions at the top of the list were redesigned.',
    result: 'About four deadlocks a month, down from 288. The capture still runs in production and pages someone when a new pattern appears, so the next regression shows up in days instead of at the next month-end close.',
    evidence: 'Extended Events captures from before and after. The alerting is still live.',
    links: []
  },
  {
    slug: 'money-transfer-mobile-app',
    title: 'A money-transfer app, built alone, live in both stores',
    kicker: 'React Native, iOS and Android',
    summary: '35 screens in four languages, OIDC with PKCE, biometric unlock, through a pentest remediation cycle and App Store review.',
    challenge: 'The product existed on the web and nowhere else. There was no mobile app, no React Native in the codebase, and no one else to write it.',
    approach: 'React Native with TypeScript in strict mode. 35 screens localized into four languages, authentication over OIDC with PKCE, biometric unlock on both platforms. I did the architecture, the screens, the release pipeline and the store submissions.',
    result: 'Published on the App Store and Google Play, after a full pentest remediation cycle and Apple review.',
    evidence: 'Both listings are public and linked below.',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/ch/app/capital-money-transfer/id6760417994' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.capitalservices.moneytransfer' }
    ]
  },
  {
    slug: 'redis-out-of-memory-outage',
    title: 'Twenty minutes of HTTP 500, and the alert that never came',
    kicker: 'Incident response, March 2026',
    summary: 'The Redis instance holding user sessions ran out of memory and every page started returning a 500. The part worth writing down is why nothing paged anyone.',
    challenge: 'Every page returned a 500, login included, so nothing about the system was usable for twenty minutes. The Redis instance holding user sessions had run out of memory: its snapshot-to-disk job forked the process every five minutes, and a fork briefly doubles what the process needs.',
    approach: 'I capped Redis memory with an eviction policy, dropped the persistence mechanisms it did not need in that role, and gave it a restart policy so the same failure would clear itself next time. Then I went looking for the second problem, which was that no alert had fired at any point.',
    result: 'It has not happened again. The reason nothing fired is that the monitoring stack was running on the same host it was monitoring, so it died with everything else. Where the monitoring runs is now the first thing I check on any system I take on.',
    evidence: 'Timestamped system logs across the incident window.',
    links: []
  },
  {
    slug: 'cloudflare-outage-continuity',
    title: 'Back online in under half an hour during the Cloudflare outage',
    kicker: 'Business continuity, 18 November 2025',
    summary: 'Cloudflare was down for nearly six hours and took a good part of the web with it. We were serving again in twenty-something minutes, from a decision made under time pressure that I would rather have made in advance.',
    challenge: 'On 18 November 2025 Cloudflare started returning 5xx network-wide. Our DNS was entirely proxied, so our traffic went down with it. Turnstile was failing too, which meant the Cloudflare dashboard login did not work, so there was no configuration change to make from their side even if one would have helped.',
    approach: 'I cut traffic over to a route that reached our origin directly instead of passing through the proxy. It traded the protection the proxy gives us for being reachable at all, which was the right trade for the duration and the wrong one to leave in place afterwards.',
    result: 'We were serving again in under half an hour. Cloudflare\'s own postmortem puts the incident at 11:20 to 17:06 UTC. Any dependency you cannot log in to during its own outage needs a way around it that you have tested in advance, not one you invent at 11:30 on a Tuesday.',
    evidence: 'Cloudflare published a full postmortem, linked below.',
    links: [
      { label: 'Cloudflare postmortem', href: 'https://blog.cloudflare.com/18-november-2025-outage/' }
    ]
  }
]

export const findCaseStudy = (slug: string): CaseStudy | undefined =>
  caseStudies.find(study => study.slug === slug)
