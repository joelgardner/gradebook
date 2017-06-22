import React from 'react'
import { didChange, keyIsEnter } from '../util/inputHelpers'

const InputCell = ({ value, valueChanged }) =>
  <input type="text"
    defaultValue={value}
    onKeyDown={e => keyIsEnter(e) && didChange(e.target.value, value) && valueChanged(e.target.value)}
    onBlur={e => didChange(e.target.value, value) && valueChanged(e.target.value)}>
  </input>

export default InputCell
