import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import css from './AppStyle.module.css';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  addContact = (id, name, number) => {
    // const { contacts } = this.state;
    const newContact = { id, name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      filter: '',
      name: '',
      number: '',
    }));
  };
  changeName = e => this.setState({ name: e.target.value });
  changeNumber = e => this.setState({ number: e.target.value });
  changeFilter = e => this.setState({ filter: e.target.value });
  render() {
    console.log(this.state);
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
        <ContactList contacts={contacts} filter={filter.toLowerCase} />
      </div>
    );
  }
}
