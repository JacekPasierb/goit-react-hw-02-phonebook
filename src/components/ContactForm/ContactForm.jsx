import React, { Component } from 'react';
import css from './ContactFormStyle.module.css';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();

    this.props.addContact(id, name, number);

    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.contactForm}>
        <label>
          <span>Name</span>

          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.props.changeName}
          />
        </label>
        <label>
          <span>Number</span>

          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.props.changeNumber}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
