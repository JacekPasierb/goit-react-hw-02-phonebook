import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import css from './AppStyle.module.css';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div className={css.container}>
        <ContactForm />
      </div>
    );
  }
}
