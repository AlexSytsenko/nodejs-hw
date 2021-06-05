import * as fs from "fs/promises"
import * as path from "path"
import { fileURLToPath } from "url";
import uuidv4 from "./utils/newId.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contactsPath = path.join(__dirname, "./db/contacts.json")



export async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath)
    const contactsList = JSON.parse(data);

    console.table(contactsList);
  } catch (error) {
    console.log(error.message)
  }

}

export async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath)
    const contactsList = JSON.parse(data)
    const contact = contactsList.find((contact) => contact.id === contactId)

    if (!contact) {
      return console.error(`Сontact with id=${contactId} not found`)
    }
      console.table(contact)

  } catch (error) {
     console.log(error.message)
  }
}

export async function removeContact(contactId) {

  try {
    const data = await fs.readFile(contactsPath);
    const contactsList = JSON.parse(data);
    const newContactList = contactsList.filter((contact) => contact.id !== contactId);

    if (newContactList.length === contactsList.length) {
      return console.log(`Сontact with id=${contactId} not found`)
    }

    fs.writeFile(contactsPath, JSON.stringify(newContactList));
    console.log(`Сontact with id=${contactId} removed`);

  } catch (error) {
    console.log(error.message);
  }

}


export async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath);
    const contactsList = JSON.parse(data);

    const contactInList = contactsList.find(contact => contact.email === email || contact.phone === phone);
    if (contactInList) {
      return console.log('Contact already in the list')
    }
    const contactNew = { id: uuidv4(), name, email, phone };
    const newContactsList = JSON.stringify([...contactsList, contactNew]);

    fs.writeFile(contactsPath, newContactsList);
    

  } catch (error) {
    console.log(error.message);
  }
}

