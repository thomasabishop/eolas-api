import express from "express"
import entries from "./routes/entries.js"
import tags from "./routes/tags.js"
import search from "./routes/search.js"
import diagnostics from "./routes/diagnostics.js"
import cors from "cors"
import { validateApiKey } from "./middlewear/auth.js"
import morgan from "morgan"

const app = express()

const port = process.env.PORT || 4000

app.use(morgan("short"))
app.use(cors())
app.use(express.json())
app.use("/", validateApiKey)
app.use("/entries", entries)
app.use("/tags", tags)
app.use("/search", search)
app.use("/diagnostics", diagnostics)

app.listen(port, () => {
	console.info(`TB-INFO eolas-api running on NodeJS ${process.version}`)
	console.info(`TB-INFO eolas-api server running at http://localhost:${port}`)
})

app.get("/health", (req, res) => {
	res.status(200).json({ status: "ok" })
})
