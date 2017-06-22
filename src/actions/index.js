//import R from 'ramda'
//import api from '../api'

/**
  Action to get the gradebook information.
  Triggered at pageload.
*/
export const FETCH_GRADEBOOK = 'FETCH_GRADEBOOK'
export const fetchGradebook = () => ({
  type: FETCH_GRADEBOOK,
})

/**
  Action to signal the completed fetch of gradebook information.
  Triggered by Redux-Saga (see sagas.js).
  @param {Gradebook} gradebook - The Gradebook object that was fetched.
*/
export const FETCH_GRADEBOOK_COMPLETED = 'FETCH_GRADEBOOK_COMPLETED'
export const fetchGradebookCompleted = gradebook => ({
  type: FETCH_GRADEBOOK_COMPLETED,
  gradebook
})

/**
  Action to create a new student.  Triggered by the user.
*/
export const ADD_STUDENT = 'ADD_STUDENT'
export const addStudent = (firstName, lastName) => ({
  type: ADD_STUDENT,
  firstName,
  lastName
})

/**
  Action to signal the completed creation of a new student.
  Triggered by Redux-Saga (see sagas.js).
  @param {Student} student - The Student object that was created.
*/
export const ADD_STUDENT_COMPLETED = 'ADD_STUDENT_COMPLETED'
export const addStudentCompleted = student => ({
  type: ADD_STUDENT_COMPLETED,
  student
})

/**
  Action to create a new test.  Triggered by the user.
*/
export const ADD_TEST = 'ADD_TEST'
export const addTest = (name, date) => ({
  type: ADD_TEST,
  name,
  date
})

/**
  Action to signal the completed creation of a new test.
  Triggered by Redux-Saga (see sagas.js).
  @param {Test} test - The Test object that was created.
*/
export const ADD_TEST_COMPLETED = 'ADD_TEST_COMPLETED'
export const addTestCompleted = test => ({
  type: ADD_TEST_COMPLETED,
  test
})