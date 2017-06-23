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

  CHANGE_ACTIVE_TEST
} from '../actions'

/**
  Reducer functions that maintains the students.  We typically mutate the
  list of students only upon a creation or deletion of a student.
  @param {Array<Student>} state - the application's list of students.
  @param {{ type : string, student: Student }} action - the message containing
  the newly created or deleted student.
*/
export function students(state = [], action) {
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
  @param {{ type : string, ... mixed }} action - the message containing
  the info about the test action.
*/
export function tests(state = [], action) {
  switch (action.type) {
    case ADD_TEST_COMPLETED:
      return [...state, action.test]

    // we want to recalculate the statistics when:
    // (a) a student is deleted, OR
    // (b) the gradebook is fetched (at page-load), OR
    // (c) when a grade is changed
    // in the cases of (a) and (b), the action contains the entire gradebook
    // so that we can do the recalc.  for (c), the action contains the
    // testId and studentId where the grade was changed,
    case DELETE_STUDENT_COMPLETED:
    case FETCH_GRADEBOOK_COMPLETED:
      // set state to the fetched tests, and fallthrough to
      // the next case so we set the test statistics
      state = action.gradebook.tests
      // eslint-disable-next-line
    case CHANGE_GRADE_COMPLETED:
      // iterate through each test, and set the min|max|average.
      // the action contains the entire gradebook, in order for us
      // to do these calculations
      state.forEach(test => {
        const isNotNaN = R.compose(R.not, Number.isNaN)
        const parseFloatById = R.compose(parseFloat, R.prop(test.id))
        const grades = action.gradebook.students.map(s => s.grades)
        const testGrades = R.filter(isNotNaN, R.map(parseFloatById, grades));
        test.min = testGrades.length ? R.reduce(R.min, Number.MAX_SAFE_INTEGER, testGrades).toFixed(2) : ''
        test.max = testGrades.length ? R.reduce(R.max, Number.MIN_SAFE_INTEGER, testGrades).toFixed(2) : ''
        test.avg = testGrades.length ? (R.sum(testGrades) / testGrades.length).toFixed(2) : ''
      })
      return state
    default:
  }
  return state;
}

function ui(state = { activeTestId: 0 }, action) {
  switch(action.type) {
    case FETCH_GRADEBOOK_COMPLETED:
      return { activeTestId: action.gradebook.tests.length ? action.gradebook.tests[0].id : 0}
    case CHANGE_ACTIVE_TEST:
      return { activeTestId: action.testId }
    default:
  }
  return state
}

export default combineReducers({
  students,
  tests,
  ui
})
