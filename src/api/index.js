// @flow
import R from 'ramda'
import type { Student } from '../types/student'
import ids from '../util/idGenerator'

// Since we're not using a server, we're generating IDs on the client.
// The following variables are id generator functions.
const studentIds = ids(getStudents().length)
const testIds = ids(getTests().length)

/**
  API function to add a student to the gradebook.  If we were using a real
  backend server, this functions contents would be replaced with a fetch call
  to POST /students.
  @param {string} firstName - Student's first name
  @param {string} lastName - Student's last name
*/
export function addStudent(firstName : string, lastName : string) : Student {
  const students : Array<Student> = getStudents()
  students.push({
    id: studentIds.next().value,
    firstName,
    lastName,
    grades: {}
  })
  setStudents(students)
  return R.last(students)
}

/**
  API function to add a test to the gradebook.  If we were using a real
  backend server, this functions contents would be replaced with a fetch call
  to POST /tests.
  @param {string} name - Test title/name
  @param {string} lastName - Test's date
*/
export function addTest(name : string, date : string) : Test {
  const tests : Array<Test> = getTests()
  tests.push({
    id: testIds.next().value,
    name,
    date
  })
  setTests(tests)
  return R.last(tests)
}

/**
  API function to fetch gradebook information.
  @param {string} firstName - Student's first name
  @param {string} lastName - Student's last name
  @returns {Gradebook} Object representing the gradebook.
*/
export function fetchGradebook() : Gradebook {
  return {
    students: getStudents(),
    tests: getTests()
  }
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


/**
  Function to retrieve test list from `localStorage`.
  If we wanted to use a real backend server/API, this function's contents
  would be replaced with a `fetch` call to: GET /tests.
*/
function getTests() : Array<Test> {
  const s : string = localStorage.getItem('tests')
  return s ? JSON.parse(s) : []
}


/**
  Function to persist test list to `localStorage`.
  If we wanted to use a real backend server/API, this function would be removed.
*/
function setTests(tests : Array<Test>) : void {
  localStorage.setItem('tests', JSON.stringify(tests))
}
