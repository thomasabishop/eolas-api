const SEARCH = `SELECT title as entry, snippet(entries_fts, 1, '<mark>', '</mark>', '...', 24) as excerpt FROM entries_fts WHERE entries_fts MATCH ? ORDER BY rank LIMIT 25`

export { SEARCH }
