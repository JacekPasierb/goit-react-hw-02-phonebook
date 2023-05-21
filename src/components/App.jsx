import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import css from './AppStyle.module.css';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  addContact = (name, id) => {
    // const { contacts } = this.state;
    const newContact = { name, id };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
