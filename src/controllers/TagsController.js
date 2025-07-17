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

    getTagsForEntry = (req, res) => {
        const entryTitle = req.params.entryTitle
        const entries = this.tagsService.getTagsForEntry(entryTitle)
        if (!entries) {
            return res.status(404).json({
                message: `Tag list could not be retrieved for entry ${entryTitle}`,
            })
        }

        return res.json(entries)
    }
}
