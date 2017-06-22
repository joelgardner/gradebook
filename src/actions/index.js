//import R from 'ramda'
//import api from '../api'

export const FETCH_GRADEBOOK = 'FETCH_GRADEBOOK'
export const fetchGradebook = () => ({
  type: FETCH_GRADEBOOK
})

export const FETCH_GRADEBOOK_COMPLETED = 'FETCH_GRADEBOOK_COMPLETED'
export const fetchGradebookCompleted = gradebook => ({
  type: FETCH_GRADEBOOK_COMPLETED,
  gradebook
})

export const ADD_STUDENT = 'ADD_STUDENT'
export const addStudent = () => ({
  type: ADD_STUDENT
})

export const ADD_STUDENT_COMPLETED = 'ADD_STUDENT_COMPLETED'
export const addStudentCompleted = gradebook => ({
  type: ADD_STUDENT_COMPLETED,
  gradebook
})
