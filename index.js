import * as contactsService from "./contacts.js";

const invokeAction = async ({ action, id }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      return console.log(allContacts);
    case "getById":
      const getContact = await contactsService.getContactById(id);
      return console.log(getContact);

    default:
      console.log("Unknown action");
  }
};

// invokeAction({ action: "list" });
invokeAction({ action: "getById", id: "rsKkOQUi80UsgVPCcLZZW" });
