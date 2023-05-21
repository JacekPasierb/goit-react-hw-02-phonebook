import React, { Component } from 'react';
import css from './ContactFormStyle.module.css';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  nameInputId = nanoid();
  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = form.elements.name.value;

    const id = nanoid();
    this.props.addContact(name, id);

    form.reset();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.contactForm}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          type="text"
          name="name"
          id={this.nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
