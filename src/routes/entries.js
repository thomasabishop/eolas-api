import express from "express"
import { EntriesService } from "../services/EntriesService"
import { EntriesController } from "../controllers/EntriesController"
import { EntriesService } from "../services/EntriesService"

const router = express.Router()
const entriesService = new EntriesService()
const entriesController = new EntriesController(entriesService)

router.get("/:entry", entriesController.getEntry)

export default router
