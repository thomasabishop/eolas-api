import express from "express"
import entries from "./routes/entries.js"
import tags from "./routes/tags.js"
import cors from "cors"

const app = express()

const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use("/entries", entries)
app.use("/tags", tags)

app.listen(port, () => {
	console.info(`INFO Server running at http://localhost:${port}`)
})
