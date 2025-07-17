import express from "express"
import TagsService from "../services/TagsService.js"
import TagsController from "../controllers/TagsController.js"
import database from "../db/connection.js"

const router = express.Router()
const tagsService = new TagsService(database)
const tagsController = new TagsController(tagsService)

router.get("/", tagsController.getAllTags)
router.get("/:entryTitle", tagsController.getTagsForEntry)

export default router
