//import React from 'react'
import { didChange, keyIsEnter } from '../util/inputHelpers'
//
// const InputCell = ({ value, valueChanged, allowStrings }) =>
//   <input type="text"
//     defaultValue={value}
//     onKeyDown={e => keyIsEnter(e) && didChange(e.target.value, value) && valueChanged(e.target.value)}
//     onBlur={e => didChange(e.target.value, value) && valueChanged(e.target.value)}>
//   </input>
//
// export default InputCell
//





import React, { Component } from 'react';

class InputCell extends Component {
  constructor() {
    super()
    this.state = {
      valid: true
    }
  }

  render() {
    return (
      <input type="text"
        defaultValue={this.props.value}
        style={this.state.valid ? null : {backgroundColor:'#f00' }}
        onKeyDown={e =>
          keyIsEnter(e) &&
          this.isValid(this.props.allowStrings, e.target.value) &&
          didChange(e.target.value, this.props.value) &&
          this.props.valueChanged(e.target.value)
        }
        onBlur={e => didChange(e.target.value, this.props.value) && this.props.valueChanged(e.target.value)}>
      </input>
    );
  }

  isValid(allowStrings, value) {
    if (allowStrings) {
      this.setState({ valid: true })
      return true
    }

    if (Number(parseFloat(value)) != value) {
      this.setState({ valid: false })
      return false
    }
    return true
  }
}

export default InputCell;
