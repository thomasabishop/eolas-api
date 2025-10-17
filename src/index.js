import express from "express"
import entries from "./routes/entries.js"
import tags from "./routes/tags.js"
import cors from "cors"
import { validateApiKey } from "./middlewear/auth.js"
const app = express()

const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use("/", validateApiKey)
app.use("/entries", entries)
app.use("/tags", tags)

app.listen(port, () => {
    console.info(`TB-INFO eolas-api running on NodeJS ${process.version}`)
    console.info(`TB-INFO eolas-api server running at http://localhost:${port}`)
})

app.get("/health", (req, res) => {
    res.status(200).json({ status: ok })
})

app.get("/health", (req, res) => {
	res.status(200).json({ status: ok })
})
