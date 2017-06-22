import { combineReducers } from 'redux'
//import R from 'ramda'
//import { FETCH_LIMIT } from '../constants'
import {
  ADD_STUDENT_COMPLETED,
  ADD_TEST_COMPLETED,
  FETCH_GRADEBOOK_COMPLETED
} from '../actions'

function students(state = [], action) {
    switch (action.type) {
      case ADD_STUDENT_COMPLETED:
        return [...state, action.student]
      case FETCH_GRADEBOOK_COMPLETED:
        return action.gradebook.students
      default:
    }
    return state;
}

function tests(state = [], action) {
    switch (action.type) {
      case ADD_TEST_COMPLETED:
      console.log("state tests", state)
      console.log("test", action.test)
        return [...state, action.test]
      case FETCH_GRADEBOOK_COMPLETED:
        return action.gradebook.tests
      default:
    }
    return state;
}

export default combineReducers({
  students,
  tests
})
