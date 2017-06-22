import { combineReducers } from 'redux'
import R from 'ramda'
//import { List, Map } from 'immutable'
import {
  ADD_STUDENT_COMPLETED,
  DELETE_STUDENT_COMPLETED,
  EDIT_STUDENT_COMPLETED,

  ADD_TEST_COMPLETED,

  FETCH_GRADEBOOK_COMPLETED,
  CHANGE_GRADE_COMPLETED,

} from '../actions'

/**
  Reducer functions that maintains the students.  We typically mutate the
  list of students only upon a creation or deletion of a student.
  @param {Array<Student>} state - the application's list of students.
  @param {{ type : string, student: Student }} action - the message containing
  the newly created or deleted student.
*/
function students(state = [], action) {
    let i
    switch (action.type) {
      case ADD_STUDENT_COMPLETED:
        return [...state, Object.assign(action.student, { grades: {} })]
      case DELETE_STUDENT_COMPLETED:
        i = R.findIndex(R.propEq('id', action.student.id), state)
        state.splice(i, 1)
        return [...state]
      case EDIT_STUDENT_COMPLETED:
        i = R.findIndex(R.propEq('id', action.student.id), state)
        state[i].name = action.student.name
        return [...state];
      case FETCH_GRADEBOOK_COMPLETED:
        return action.gradebook.students
      case CHANGE_GRADE_COMPLETED:
        i = R.findIndex(R.propEq('id', action.studentId), state)
        state[i].grades[action.testId] = action.grade
        return [...state]
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
