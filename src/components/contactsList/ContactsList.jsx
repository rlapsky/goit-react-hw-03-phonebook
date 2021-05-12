import React from "react";
import ContactsListItems from "./contactsListItems/ContactsListItems";

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactsListItems contact={contact} deleteContact={deleteContact} />
      ))}
    </ul>
  );
};

export default ContactsList;
