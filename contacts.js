import * as fs from "fs/promises"
import * as path from "path"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contactsPath = path.join(__dirname, "./db/contacts.json")

function logger() {
  console.log(contactsPath);
}

export default logger;