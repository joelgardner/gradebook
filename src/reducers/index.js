import { combineReducers } from 'redux'
import R from 'ramda'
import { List, Map } from 'immutable'
import {
  ADD_STUDENT_COMPLETED,
  ADD_TEST_COMPLETED,
  FETCH_GRADEBOOK_COMPLETED,
  CHANGE_GRADE_COMPLETED
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
        const newStudent = Object.assign(action.student, { grades: Map({}) })
        return List([...state, newStudent])
      case FETCH_GRADEBOOK_COMPLETED:
        action.gradebook.students.forEach(s => s.grades = Map(s.grades))
        return List(action.gradebook.students)
      case CHANGE_GRADE_COMPLETED:
        return state.withMutations(students => {
          // find the student via the action's studentId
          const student = R.find(R.propEq('id', action.studentId), students)
          // update the grade of the student's test via the action's testId
          student.grades.set(action.testId, action.grade)
        })
      default:
    }
    return List(state);
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
