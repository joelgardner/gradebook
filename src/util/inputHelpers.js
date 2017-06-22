import R from 'ramda'

export function didChange(newValue, oldValue) {
  return R.defaultTo('', newValue) !== R.defaultTo('', oldValue)
}

export function keyIsEnter(e) {
  return e.keyCode === 13
}
