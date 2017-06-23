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
        onFocus={e => e.target.select()}
        onChange={e => this.validate(e.target.value)}
        onKeyDown={e => keyIsEnter(e) && e.target.blur()}
        onBlur={e => didChange(e.target.value, this.props.value) && this.props.valueChanged(e.target.value)}>
      </input>
    )
  }

  validate(value) {
    // (a) cells containing student names can have any arbitrary string
    // (b) cells containing grades must have a non-NaN value
    if (this.props.allowStrings || !isNaN(value)) {
      this.setState({ value })
    }
  }
}

export default InputCell;
