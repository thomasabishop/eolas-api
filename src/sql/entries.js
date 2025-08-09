const GET_ENTRY = `SELECT * FROM entries WHERE title = ?`

const GET_ALL_ENTRIES = `SELECT title, last_modified FROM entries`

const GET_OUTLINKS_FOR_ENTRY = `SELECT target_entry_title FROM backlinks WHERE source_entry_title = ?` 

const GET_BACKLINKS_FOR_ENTRY = `SELECT source_entry_title FROM backlinks WHERE target_entry_title = ?`

const GET_ENTRIES_FOR_TAG = `SELECT entry_title from entries_tags WHERE tag_name = ?`


export { GET_ENTRY, GET_ALL_ENTRIES, GET_BACKLINKS_FOR_ENTRY, GET_OUTLINKS_FOR_ENTRY, GET_ENTRIES_FOR_TAG }
