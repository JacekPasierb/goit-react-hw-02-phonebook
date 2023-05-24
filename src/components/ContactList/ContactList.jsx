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
    const { contacts, filter } = this.props;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    return (
      <>
        <ul>
          {filteredContacts.map(contact => (
            <li className={css.contactItem} key={contact.id}>
              {contact.name}: {this.formatPhoneNumber(contact.number)}
              <button type='submit' onClick={()=>console.log("deleted", contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
