// @flow
import R from 'ramda'
import type { Student, StudentCtor } from '../types/student'


/**
  API function to add a student to the gradebook.  If we were using a real
  backend server, this functions contents would be replaced with a fetch call
  to POST /students.
  @param {string} firstName - Student's first name
  @param {string} lastName - Student's last name
*/
export function addStudent(firstName : string, lastName : string) : Student {
  const students : Array<Student> = getStudents()
  students.push(new StudentCtor(firstName, lastName))
  setStudents(students)
  return R.last(students)
}


/**
  API function to fetch gradebook information.
  @param {string} firstName - Student's first name
  @param {string} lastName - Student's last name
  @returns {Gradebook} Object representing the gradebook.
*/
export function fetchGradebook() : Gradebook {
  return null
}


/**
  Function to retrieve student list from `localStorage`.
  If we wanted to use a real backend server/API, this function's contents
  would be replaced with a `fetch` call to: GET /students.
*/
function getStudents() : Array<Student> {
  const s : string = localStorage.getItem('students')
  return s ? JSON.parse(s) : []
}


/**
  Function to persist student list to `localStorage`.
  If we wanted to use a real backend server/API, this function would be removed.
*/
function setStudents(students : Array<Student>) : void {
  localStorage.setItem('students', JSON.stringify(students))
}
