export class EntriesController {
    entriesService

    constructor(entriesService) {
        this.entriesService = entriesService
    }

    getEntry = async (req, res) => {
        const response = await this.entriesService.getEntry()
    }
}
