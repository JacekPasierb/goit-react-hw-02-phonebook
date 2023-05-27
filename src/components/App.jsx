import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import css from './AppStyle.module.css';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (id, name, number) => {
    const { contacts } = this.state;

    const isName = contacts.some(contact => contact.name === name);
    if (isName) {
      alert('Kontakt o tej nazwie już istnieje!');
      return;
    }

    const newContact = { id, name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      filter: '',
    }));
  };
  deleteContact = id => {
    const { contacts } = this.state;

    const actualContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: actualContacts,
      filter: '',
    });
  };
  changeName = e => this.setState({ name: e.target.value });
  changeNumber = e => this.setState({ number: e.target.value });
  changeFilter = e => this.setState({ filter: e.target.value });
  render() {
    const { contacts, filter } = this.state;
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.addContact}
          changeName={this.changeName}
          changeNumber={this.changeNumber}
        />
        <h2>Contacts</h2>
        <Filter changeFilter={this.changeFilter} />
        <ContactList
          contacts={contacts}
          filter={filter.toLowerCase()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
