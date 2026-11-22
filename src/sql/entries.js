const GET_ENTRY = `SELECT * FROM entries WHERE title = ?`

const GET_ALL_ENTRIES = `SELECT title, last_modified FROM entries`

const GET_OUTLINKS_FOR_ENTRY = `SELECT target_entry_title FROM backlinks WHERE source_entry_title = ?` 

const GET_BACKLINKS_FOR_ENTRY = `SELECT source_entry_title FROM backlinks WHERE target_entry_title = ?`

const GET_ENTRIES_FOR_TAG = `
    SELECT et.entry_title, e.last_modified
    FROM entries_tags et
    LEFT JOIN entries e ON e.title = et.entry_title
    WHERE et.tag_name = ?
    ORDER BY et.entry_title`


export { GET_ENTRY, GET_ALL_ENTRIES, GET_BACKLINKS_FOR_ENTRY, GET_OUTLINKS_FOR_ENTRY, GET_ENTRIES_FOR_TAG }
