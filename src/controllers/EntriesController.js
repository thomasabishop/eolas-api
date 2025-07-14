export class EntriesController {
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
}
