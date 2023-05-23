import React, { Component } from 'react'

export class Filter extends Component {
  render() {
    return (
      <div><input type="text" onChange={this.props.changeFilter} /></div>
    )
  }
}

