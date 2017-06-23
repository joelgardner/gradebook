import React, { Component } from 'react';
import { didChange, keyIsEnter, goToNextTabIndex } from '../util/inputHelpers'

class InputCell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value || ''
    }
  }

  render() {
    return (
      <input className="input" type="text"
        tabIndex={this.props.tabIndex}
        value={this.state.value}
        onFocus={e => this.handleFocus(e)}
        onChange={e => this.validate(e.target.value)}
        onKeyDown={e => keyIsEnter(e) && goToNextTabIndex(e)}
        onBlur={e => didChange(e.target.value, this.props.value) && this.props.valueChanged(e.target.value)}>
      </input>
    )
  }

  handleFocus(e) {
    // if an onFocus handler was passed, call it
    if (this.props.onFocus) {
      this.props.onFocus()
    }

    // if this is a numeric cell, highlight the contents for easy updating
    if (!this.props.allowStrings) {
      e.target.select()
    }
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
