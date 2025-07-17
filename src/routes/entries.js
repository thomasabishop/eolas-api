import express from "express"
import EntriesService from "../services/EntriesService.js"
import EntriesController from "../controllers/EntriesController.js"
import database from "../db/connection.js"

const router = express.Router()
const entriesService = new EntriesService(database)
const entriesController = new EntriesController(entriesService)

router.get("/", entriesController.getAllEntries)
router.get("/:title", entriesController.getEntry)
router.get("/tag/:tag", entriesController.getEntriesForTag)
export default router
