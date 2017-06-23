import R from 'ramda'

export function didChange(newValue, oldValue) {
  return R.defaultTo('', newValue) !== R.defaultTo('', oldValue)
}

export function keyIsEnter(e) {
  return e.keyCode === 13
}

export function goToNextTabIndex(e) {
  // find the next cell in line and focus on it
  let next = document.querySelector(`input[tabIndex="${e.target.tabIndex + 1}"]`)
  if (next) {
    next.focus()
    return
  }
  // if no more, go to top left cell
  document.querySelector(`input[tabIndex="1"]`).focus()
}
