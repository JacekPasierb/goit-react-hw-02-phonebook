import React, { Component } from 'react';
import css from './ContactListStyle.module.css';
export default class ContactList extends Component {
  formatPhoneNumber(phoneNumber) {
    return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(
      3,
      6
    )} ${phoneNumber.slice(6)}`;
  }
  render() {
    const contacts = this.props.contacts;
    const filter = this.props.filter;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    return (
      <>
        <ul>
          {filteredContacts.map(contact => (
            <li className={css.contactItem} key={contact.id}>
              {contact.name}: {this.formatPhoneNumber(contact.number)}
            </li>
          ))}
        </ul>
      </>
    );
  }
}