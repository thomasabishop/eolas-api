const GET_ENTRY = `SELECT * FROM entries WHERE title = ?`

const GET_ALL_ENTRIES = `SELECT title, last_modified FROM entries`

const GET_ENTRIES_FOR_TAG = `SELECT entry_title from entries_tags WHERE tag_name = ?`

export { GET_ENTRY, GET_ALL_ENTRIES, GET_ENTRIES_FOR_TAG }
