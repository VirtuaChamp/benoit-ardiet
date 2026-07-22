export type Note = {
  slug: string
  title: string
  date: string
  summary: string
  body: string[]
}

export const notes: Note[] = []

export const findNote = (slug: string): Note | undefined =>
  notes.find(note => note.slug === slug)
