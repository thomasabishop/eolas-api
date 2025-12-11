export default class SearchController {
	searchService

	constructor(searchService) {
		this.searchService = searchService
	}

	search = (req, res) => {
		const query = req.params.query
		const results = this.searchService.search(query)
		if (!results) {
			return res.status(404).json({
				message: `No matches for query ${query}`,
			})
		}

		return res.json(results)
	}
}
