import { DatabaseSync } from "node:sqlite"

const DATABASE_PATH = process.env.DB_PATH

const database = new DatabaseSync(DATABASE_PATH)

export default database
