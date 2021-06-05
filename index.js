import { listContacts, getContactById, removeContact, addContact } from "./contacts.js";
import program from './utils/commander.js';

program.parse(process.argv);
const argv = program.opts();



  // getContactById('6cc3822f-f13d-45c6-a8da-b49b735ef7a9');
// console.log(uuidv4());

// listContacts()

// addContact("Cyr Ja", "mtts.Cras@non.net", "(740) 222-2688");


function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;

    case "get":
      getContactById(+id);
      break;

    case "add":
      addContact(name, email, phone);
      break;

    case "remove":
      removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);