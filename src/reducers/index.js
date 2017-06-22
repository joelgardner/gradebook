import { combineReducers } from 'redux'
//import R from 'ramda'
import {
  ADD_STUDENT_COMPLETED,
  ADD_TEST_COMPLETED,
  FETCH_GRADEBOOK_COMPLETED
} from '../actions'

/**
  Reducer functions that maintains the students.  We typically mutate the
  list of students only upon a creation or deletion of a student.
  @param {Array<Student>} state - the application's list of students.
  @param {{ type : string, student: Student }} action - the message containing
  the newly created or deleted student.
*/
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


/**
  Reducer functions that maintains the tests.  We typically mutate the
  list of tests only upon a creation or deletion of a test.
  @param {Array<Test>} state - the application's list of tests.
  @param {{ type : string, test: Test }} action - the message containing
  the newly created or deleted test.
*/
function tests(state = [], action) {
    switch (action.type) {
      case ADD_TEST_COMPLETED:
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
