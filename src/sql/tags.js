const GET_ALL_TAGS = `SELECT name FROM tags`

const GET_TAGS_FOR_ENTRY = `SELECT tag_name FROM entries_tags WHERE entry_title = ?`

export { GET_ALL_TAGS, GET_TAGS_FOR_ENTRY }
