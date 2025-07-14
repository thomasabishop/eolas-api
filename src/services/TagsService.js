import { GET_ALL_TAGS } from "../sql/tags.js"

export default class TagsService {
    database

    constructor(database) {
        this.database = database
    }

    sortTags = (tags) => {
        return tags.sort((a, b) => a.name.localeCompare(b.name))
    }

    getAllTags = () => {
        const tags = this.sortTags(this.database.prepare(GET_ALL_TAGS).all()).flatMap((tag) => tag.name)
        return { count: tags.length, tags: tags }
    }
}
