export default class EntriesController {
    entriesService

    constructor(entriesService) {
        this.entriesService = entriesService
    }

    getEntry = (req, res) => {
        const title = req.params.title
        const entry = this.entriesService.getEntry(title)
        if (!entry) {
            return res.status(404).json({
                message: `No entry found with title ${title}`,
            })
        }

        return res.json(entry)
    }

    getAllEntries = (req, res) => {
        const { sort, limit } = req.query
        const entries = this.entriesService.getAllEntries(sort, limit)
        if (!entries) {
            return res.status(404).json({
                message: `Entries list could not be retrieved`,
            })
        }

        return res.json(entries)
    }

    getBacklinksForEntry = (req, res) => {
        const title = req.params.title
        const entries = this.entriesService.getBacklinksForEntry(title)
        if (!entries) {
            return res.status(404).json({
                message: `Backlinks could not be retrieved for entry ${title}`,
            })
        }

        return res.json(entries)
    }

    getOutlinksForEntry = (req, res) => {
        const title = req.params.title
        const entries = this.entriesService.getOutlinksForEntry(title)
        if (!entries) {
            return res.status(404).json({
                message: `Outlinks could not be retrieved for entry ${title}`,
            })
        }

        return res.json(entries)
    }


    getEntriesForTag = (req, res) => {
        const tag = req.params.tag
        const sort = req.query.sort
        const entries = this.entriesService.getEntriesForTag(tag, sort)
        if (!entries) {
            return res.status(404).json({
                message: `Could not retrieve entries for tag ${tag}`,
            })
        }
        return res.json(entries)
    }
}
