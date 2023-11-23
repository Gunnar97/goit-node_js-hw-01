import { program } from "commander";
import * as contactsService from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      return console.log(allContacts);
    case "get":
      const getContact = await contactsService.getContactById(id);
      return console.log(getContact);
    case "add":
      const newContact = await contactsService.addContact({
        name,
        email,
        phone,
      });
      return console.log(newContact);
    case "remove":
      const deleteContactById = await contactsService.deleteContact(id);
      return console.log(deleteContactById);
    default:
      console.log("Unknown action");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();
const options = program.opts();
invokeAction(options);
