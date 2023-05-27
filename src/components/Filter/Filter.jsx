import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import css from './FilterStyle.module.css';
import PropTypes from 'prop-types';

export class Filter extends Component {
  filterInputId = nanoid();
  render() {
    return (
      <div className={css.filter}>
        <label htmlFor={this.filterInputId}>Find contacts by name</label>
        <input
          type="text"
          name="filter"
          id={this.filterInputId}
          onChange={this.props.changeFilter}
        />
      </div>
    );
  }
}
Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
