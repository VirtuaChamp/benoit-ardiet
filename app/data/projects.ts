export type Project = {
  name: string
  href: string
  text: string
  tags: string[]
}

export const projects: Project[] = [
  {
    name: 'database-mcp-server',
    href: 'https://github.com/VirtuaChamp/database-mcp-server',
    text: 'A read-only Model Context Protocol server that lets an AI assistant explore a SQL Server schema, sample rows and read stored procedures without being able to change anything. Built in an afternoon to understand how MCP works, with OpenTelemetry tracing so I can see what the assistant actually queries.',
    tags: ['C#', '.NET', 'MCP', 'OpenTelemetry']
  },
  {
    name: 'homelab',
    href: 'https://github.com/VirtuaChamp/homelab',
    text: 'The box at home where I run the things I do not get to touch at work: a single-node k3s cluster, self-hosted services, and the configs for all of it.',
    tags: ['k3s', 'Docker', 'Linux']
  },
  {
    name: 'benoitardiet.com',
    href: 'https://github.com/VirtuaChamp/benoit-ardiet',
    text: 'This site. One page and a few case studies, no tracking, deployed to Cloudflare Workers from GitHub Actions.',
    tags: ['Nuxt 4', 'TypeScript', 'Cloudflare Workers']
  }
]
