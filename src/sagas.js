//import R from 'ramda'
import { put, takeEvery, call } from 'redux-saga/effects'
//import { FETCH_LIMIT } from './constants'
import * as api from './api'
import {
  //DELETE_STUDENT,
  FETCH_GRADEBOOK,
  FETCH_GRADEBOOK_COMPLETED,
  //FETCH_GRADEBOOK_FAILED,
  ADD_STUDENT,
  ADD_STUDENT_COMPLETED,
  //ADD_STUDENT_FAILED,
  ADD_TEST,
  ADD_TEST_COMPLETED
} from './actions'


/**
  Called when user clicks the "Add Student" button.  Calls the API's addStudent
  method (which for now is just using localStorage), and once completed, yields
  an ADD_STUDENT_COMPLETED action with the new student.
  @param {{ firstName : string, lastName : string }} action - Object containing
  first and last name of the user to add to the gradebook.
*/
export function* addStudent(action) {
  const student = yield call(api.addStudent, action.firstName, action.lastName)
  yield put({
    type: ADD_STUDENT_COMPLETED,
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
  The Root Saga.  Listens for actions, and calls the corresponding methods --
  see above.
*/
export default function* rootSaga() {
  yield takeEvery(ADD_STUDENT, addStudent)
  yield takeEvery(ADD_TEST, addTest)
  yield takeEvery(FETCH_GRADEBOOK, fetchGradebook)
}
