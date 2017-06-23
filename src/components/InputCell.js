import React, { Component } from 'react';
import { didChange, keyIsEnter } from '../util/inputHelpers'

class InputCell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  render() {
    return (
      <input type="text"
        tabIndex={this.props.tabIndex}
        value={this.state.value}
        onFocus={e => { this.props.onFocus(); e.target.select() }}
        onChange={e => this.validate(e.target.value)}
        onKeyDown={e => keyIsEnter(e) && e.target.blur()}
        onBlur={e => didChange(e.target.value, this.props.value) && this.props.valueChanged(e.target.value)}>
      </input>
    )
  }

  validate(value) {
    // (a) cells containing student names can have any arbitrary string
    // (b) cells containing grades must have a non-NaN value
    // TODO: there is a gotcha here that if a teacher wants to enter a
    // negative number (maybe negative grades exist?), they'll have to enter
    // the number value first, then the "-" at the beginning.
    if (this.props.allowStrings || !isNaN(value)) {
      this.setState({ value })
    }
  }
}

export default InputCell;
