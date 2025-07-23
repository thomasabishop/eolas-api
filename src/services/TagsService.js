import { GET_ALL_TAGS, GET_TAGS_FOR_ENTRY } from "../sql/tags.js"

export default class TagsService {
	database

	constructor(database) {
		this.database = database
	}

	getAllTags = () => {
		const tags = this.database.prepare(GET_ALL_TAGS).all()
		const sorted = this._sortTags(tags, "name")
		const list = sorted.flatMap((tag) => tag.name)
		return { count: tags.length, data: list }
	}

	getTagsForEntry = (entryTitle) => {
		const tags = this.database.prepare(GET_TAGS_FOR_ENTRY).all(entryTitle)
		const sorted = this._sortTags(tags, "tag_name")
		const list = sorted.flatMap((tag) => tag.tag_name)
		return { count: tags.length, data: list }
	}

	_sortTags = (tags, fieldName) => {
		return tags.sort((a, b) => a[fieldName].localeCompare(b[fieldName]))
	}
}
