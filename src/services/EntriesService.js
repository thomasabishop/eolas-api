import { GET_ALL_ENTRIES, GET_ENTRY, GET_ENTRIES_FOR_TAG, GET_BACKLINKS_FOR_ENTRY, GET_OUTLINKS_FOR_ENTRY } from "../sql/entries.js"

export default class EntriesService {
    database

    constructor(database) {
        this.database = database
    }

    getEntry = (title) => {
        return this.database.prepare(GET_ENTRY).get(title)
    }

    getAllEntries = (sort, limit) => {
        const entries = this.database.prepare(GET_ALL_ENTRIES).all()

        const sorted =
            sort === "date" ? this._sortByDate(entries) : this._sortByTitle(entries, "title")

        const sliced = sorted.slice(0, Number(limit) || -1)

        return {
            count: sliced.length,
            data: sliced,
        }
    }

    getEntriesForTag = (tag, sort) => {
        const entries = this.database.prepare(GET_ENTRIES_FOR_TAG).all(tag)
        return {
            count: entries.length,
            data:
                sort === "date"
                    ? this._sortByDate(entries)
                    : this._sortByTitle(entries, "entry_title"),
        }
    }

    getBacklinksForEntry = (title) => {
        const backlinks = this.database.prepare(GET_BACKLINKS_FOR_ENTRY).all(title)
        const sorted = this._sortByTitle(backlinks, "source_entry_title")
        const list = sorted.flatMap((i) => i.source_entry_title)
        return {
            count: backlinks.length,
            data: list
        }
    }

    getOutlinksForEntry = (title) => {
        const outlinks = this.database.prepare(GET_OUTLINKS_FOR_ENTRY).all(title)
        const sorted = this._sortByTitle(outlinks, "target_entry_title")
        const list = sorted.flatMap((i) => i.target_entry_title)
        return {
            count: outlinks.length,
            data: list
        }

    }

    _sortByTitle = (entries, fieldName) => {
        return entries.sort((a, b) => a[fieldName].localeCompare(b[fieldName]))
    }

    _sortByDate = (entries, fieldName = "last_modified") => {
        const sorted = entries.sort((a, b) => new Date(b[fieldName]) - new Date(a[fieldName]))
        return sorted
    }
}
