import { SEARCH } from "../sql/search.js"

export default class SearchService {
    database

    constructor(database) {
        this.database = database
    }

    search = (query) => {
        const results = this.database.prepare(SEARCH).all(query.trim())
        return {
            count: results.length,
            data: results,
        }
    }
}
