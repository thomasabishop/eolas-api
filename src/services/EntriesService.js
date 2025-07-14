import { sortByDate, sortByTitle } from "../lib/sorters.js"
import { GET_ALL_ENTRIES, GET_ENTRY } from "../sql/entries.js"

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
}
