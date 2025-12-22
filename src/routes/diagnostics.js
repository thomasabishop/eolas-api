import express from "express"
import DiagnosticsService from "../services/DiagnosticsService.js"
import DiagnosticsController from "../controllers/DiagnosticsController.js"
import database from "../db/connection.js"

const router = express.Router()
const diagnosticsService = new DiagnosticsService(database)
const diagnosticsContoller = new DiagnosticsController(diagnosticsService)

router.get("/broken-links", diagnosticsContoller.getBrokenLinks)
export default router
