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
export const addStudent = name => ({
  type: ADD_STUDENT,
  name
})

/**
  Action to delete a student.  Triggered by the user.
*/
export const DELETE_STUDENT = 'DELETE_STUDENT'
export const deleteStudent = id => ({
  type: DELETE_STUDENT,
  id
})

/**
  Action to signal the completed deletion of a student.
  Triggered by Redux-Saga (see sagas.js).
  @param {Student} student - The Student object that was removed.
*/
export const DELETE_STUDENT_COMPLETED = 'DELETE_STUDENT_COMPLETED'
export const deleteStudentCompleted = student => ({
  type: DELETE_STUDENT_COMPLETED,
  student
})


/**
  Action to edit a student's name.  Triggered by the user.
*/
export const EDIT_STUDENT = 'EDIT_STUDENT'
export const editStudent = (id, name) => ({
  type: EDIT_STUDENT,
  id,
  name
})

/**
  Action to signal the completed edit of a student's name.
  Triggered by Redux-Saga (see sagas.js).
  @param {Student} student - The Student object that was edited.
*/
export const EDIT_STUDENT_COMPLETED = 'EDIT_STUDENT_COMPLETED'
export const editStudentCompleted = student => ({
  type: EDIT_STUDENT_COMPLETED,
  student
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


/**
  Action to signal that the user has entered/changed the grade for a
  student's test.
  @param {int} studentId - The ID of the student whose grade was entered.
  @param {int} testId - The ID of the test which was changed.
  @param {int} grade - The grade the student made on the test.
*/
export const CHANGE_GRADE = 'CHANGE_GRADE'
export const changeGrade = (studentId, testId, grade) => ({
  type: CHANGE_GRADE,
  studentId,
  testId,
  grade
})

/**
  Action to signal the completed grade-change of a student's test.
  Triggered by Redux-Saga (see sagas.js).
  @param {int} studentId - The ID of the student whose grade was entered.
  @param {int} testId - The ID of the test which was changed.
  @param {int} grade - The grade the student made on the test.
*/
export const CHANGE_GRADE_COMPLETED = 'CHANGE_GRADE_COMPLETED'
export const gradeChangeCompleted = (studentId, testId, grade) => ({
  type: CHANGE_GRADE_COMPLETED,
  studentId,
  testId,
  grade
})
