//import R from 'ramda'
import { put, takeEvery, call } from 'redux-saga/effects'
import * as api from './api'
import {
  //DELETE_STUDENT,
  FETCH_GRADEBOOK,
  FETCH_GRADEBOOK_COMPLETED,
  //FETCH_GRADEBOOK_FAILED,
  ADD_STUDENT,
  ADD_STUDENT_COMPLETED,

  DELETE_STUDENT,
  DELETE_STUDENT_COMPLETED,

  EDIT_STUDENT,
  EDIT_STUDENT_COMPLETED,

  //ADD_STUDENT_FAILED,
  ADD_TEST,
  ADD_TEST_COMPLETED,

  CHANGE_GRADE,
  CHANGE_GRADE_COMPLETED
  //CHANGE_GRADE_FAILED
} from './actions'


/**
  Called when user clicks the "Add Student" button.  Calls the API's addStudent
  method (which for now is just using localStorage), and once completed, yields
  an ADD_STUDENT_COMPLETED action with the new student.
  @param {{ name : string }} action - Object containing
  first and last name of the user to add to the gradebook.
*/
export function* addStudent(action) {
  const student = yield call(api.addStudent, action.name)
  yield put({
    type: ADD_STUDENT_COMPLETED,
    student
  })
}

/**
  Called when user clicks the "Delete Student" button.  Calls the API's deleteStudent
  method (which for now is just using localStorage), and once completed, yields
  an DELETE_STUDENT_COMPLETED action with the new student.
  @param {{ id : int }} action - Object containing
  first and last name of the user to add to the gradebook.
*/
export function* deleteStudent(action) {
  const student = yield call(api.deleteStudent, action.id)
  yield put({
    type: DELETE_STUDENT_COMPLETED,
    student
  })
}

/**
  Called when user edits a student's name.  Calls the API's editStudent
  method (which for now is just using localStorage), and once completed, yields
  an EDIT_STUDENT_COMPLETED action with the changed student.
  @param {{ id : int, name : String }} action - Object containing
  first and last name of the user to add to the gradebook.
*/
export function* editStudent(action) {
  const student = yield call(api.editStudent, action.id, action.name)
  yield put({
    type: EDIT_STUDENT_COMPLETED,
    student
  })
}




/**
  Called when user clicks the "Add Test" button.  Calls the API's addTest
  method (which for now is just using localStorage), and once completed, yields
  an ADD_TEST_COMPLETED action with the new test.
  @param {{ name : string, date : string }} action - Object containing
  test and date of the test to add to the gradebook.
*/
export function* addTest(action) {
  const test = yield call(api.addTest, action.name, action.date)
  yield put({
    type: ADD_TEST_COMPLETED,
    test
  })
}

/**
  Called on pageload (see src/index.js).  Populates the application's initial
  state from the API.
*/
export function* fetchGradebook(action) {
  const gradebook = yield call(api.fetchGradebook)
  yield put({
    type: FETCH_GRADEBOOK_COMPLETED,
    gradebook
  })
}

/**
  Called when user enters a new grade into a cell in the gradebook. Calls the
  API's changeGrade method (which for now is just using localStorage), and once
  completed, yields an CHANGE_GRADE_COMPLETED action with the new test.
  @param {{ studentId : int, testId : int, grade : int }} action - Object
  containing test and date of the test to add to the gradebook.
*/
export function* changeGrade(action) {
  const gradebook = yield call(api.changeGrade, action.studentId, action.testId, action.grade)
  yield put({
    type: CHANGE_GRADE_COMPLETED,
    studentId: action.studentId,
    testId: action.testId,
    grade: action.grade,
    gradebook
  })
}

/**
  The Root Saga.  Listens for actions, and calls the corresponding methods --
  see above.
*/
export default function* rootSaga() {
  yield takeEvery(ADD_STUDENT, addStudent)
  yield takeEvery(DELETE_STUDENT, deleteStudent)
  yield takeEvery(EDIT_STUDENT, editStudent)
  yield takeEvery(ADD_TEST, addTest)
  yield takeEvery(FETCH_GRADEBOOK, fetchGradebook)
  yield takeEvery(CHANGE_GRADE, changeGrade)
}
