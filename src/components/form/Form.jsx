import React, { Component } from "react";

class Form extends Component {
  state = { name: "", number: "" };

  onHendelChange = (e) => {
    const  { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onHendelSubmit = e => {
    e.preventDefault()
    this.props.addContact(this.state) 
  }

  render() {
    return (
      <form onSubmit={this.onHendelSubmit}>
        <p>Name</p>
        <input
          onChange={this.onHendelChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <p>Number</p>
        <input
          type="tel"
          onChange={this.onHendelChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
