import React from "react";

const ContactsListItems = ({ contact, deleteContact }) => {
  return (
    <li key={contact.id}>
      {contact.name}: {contact.number}
      <button type="button" onClick={deleteContact} id={contact.id}>
        Delete
      </button>
    </li>
  );
};

export default ContactsListItems;
