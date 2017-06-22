import React from 'react'
import R from 'ramda'

const Gradebook = ({ grade, changeGrade }) =>
  <input type="text"
    defaultValue={grade}
    onKeyDown={e => keyIsEnter(e) && didChange(e.target.value, grade) && changeGrade(e.target.value)}
    onBlur={e => didChange(e.target.value, grade) && changeGrade(e.target.value)}
  ></input>

function didChange(value, grade) {
  return R.defaultTo('', value) !== R.defaultTo('', grade)
}

function keyIsEnter(e) {
  return e.keyCode === 13
}

export default Gradebook
