export default class DiagnosticsController {
    diagnosticsService

    constructor(diagnosticsService) {
        this.diagnosticsService = diagnosticsService
    }

    getBrokenLinks = (req, res) => {
        const brokenLinks = this.diagnosticsService.getBrokenLinks()
        if (!brokenLinks) {
            return res.status(404).json({
                message: `Broken link list could not be retrieved`,
            })
        }

        return res.json(brokenLinks)
    }
}
