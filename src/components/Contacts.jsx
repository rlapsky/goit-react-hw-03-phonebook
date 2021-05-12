import React, { Component } from "react";
import ContactsList from "./contactsList/ContactsList";
import Form from "./form/Form";
import { v4 as uuid } from "uuid";
import Filter from "./filter/Filter";

class Contacts extends Component {
  state = {
    contacts: [
      { id: uuid(), name: "Rosie Simpson", number: "459-12-56" },
      { id: uuid(), name: "Hermione Kline", number: "443-89-12" },
      { id: uuid(), name: "Eden Clements", number: "645-17-79" },
      { id: uuid(), name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  addContact = (contact) => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, { ...contact, id: uuid() }],
      };
    });
  };

  deleteContact = (e) => {
    const { id } = e.target;
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  onFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFiltered = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);
    if (contacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log("обновилось");
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Form addContact={this.addContact} />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Filter onFilter={this.onFilter} filter={this.state.filter} />
        <ContactsList
          contacts={this.getFiltered()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default Contacts;
