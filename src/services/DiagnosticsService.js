import { GET_BROKEN_LINKS } from "../sql/diagnostics.js"

export default class DiagnosticsService {
    database

    constructor(database) {
        this.database = database
    }

    getBrokenLinks = () => {
        const brokenLinks = this.database.prepare(GET_BROKEN_LINKS).all()
        return {
            count: brokenLinks.length,
            data: brokenLinks,
        }
    }
}
