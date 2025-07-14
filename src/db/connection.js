import { DatabaseSync } from "node:sqlite"

const DATABASE_PATH = "/home/thomas/repos/eolas-api/data/eolas.db"

const database = new DatabaseSync(DATABASE_PATH)

export default database
