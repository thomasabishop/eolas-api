export default class TagsController {
	tagsService

	constructor(tagsService) {
		this.tagsService = tagsService
	}

	getAllTags = (req, res) => {
		const tags = this.tagsService.getAllTags()
		if (!tags) {
			return res.status(404).json({
				message: `Tags list could not be retrieved`,
			})
		}

		return res.json(tags)
	}
}
