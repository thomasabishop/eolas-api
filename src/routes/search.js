import express from "express"
import SearchService from "../services/SearchService.js"
import SearchController from "../controllers/SearchController.js"
import database from "../db/connection.js"

const router = express.Router()
const searchService = new SearchService(database)
const searchController = new SearchController(searchService)

router.get("/:query", searchController.search)

export default router
