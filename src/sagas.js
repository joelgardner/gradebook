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
  //ADD_TEST
} from './actions'


/**
  Called when a
  @param {action}
*/
export function* addStudent(action) {
  const student = yield call(api.addStudent, action.name)
  yield put({
    type: ADD_STUDENT_COMPLETED,
    student
  })
}

export function* fetchGradebook(action) {
  const gradebook = yield call(api.fetchGradebook, action.name)
  yield put({
    type: FETCH_GRADEBOOK_COMPLETED,
    gradebook
  })
}

export default function* rootSaga() {
  yield takeEvery(ADD_STUDENT, addStudent)
  yield takeEvery(FETCH_GRADEBOOK, fetchGradebook)
}
