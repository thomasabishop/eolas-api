const GET_ENTRY = `SELECT * FROM entries WHERE title = ?`

const GET_ALL_ENTRIES = `SELECT title, last_modified FROM entries`

export { GET_ENTRY, GET_ALL_ENTRIES }
