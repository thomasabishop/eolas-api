import { sortByDate, sortByTitle } from "../lib/sorters.js"
import { GET_ALL_ENTRIES, GET_ENTRY, GET_ENTRIES_FOR_TAG } from "../sql/entries.js"

export default class EntriesService {
    database

    constructor(database) {
        this.database = database
    }

    getEntry = (title) => {
        return this.database.prepare(GET_ENTRY).get(title)
    }

    getAllEntries = (sort, limit) => {
        const entries = this.database
            .prepare(GET_ALL_ENTRIES)
            .all()
            .slice(0, Number(limit) || -1)

        return {
            count: entries.length,
            entries: sort === "date" ? sortByDate(entries) : sortByTitle(entries),
        }
    }

    getEntriesForTag = (tag, sort) => {
        const entries = this.database.prepare(GET_ENTRIES_FOR_TAG).all(tag)
        return {
            count: entries.length,
            entries: sort === "date" ? this._sortByDate(entries) : this._sortByTitle(entries, "entry_title"),
        }
    }

    _sortByTitle = (entries, fieldName) => {
        return entries.sort((a, b) => a[fieldName].localeCompare(b[fieldName]))
    }

    _sortByDate = (entries, fieldName = last_modified) => {
        return entries.sort((a, b) => new Date(b[fieldName]) - new Date(a[fieldName]))
    }
}
