// @flow
import R from 'ramda'
import type { Student, Test, Gradebook } from '../types'
import ids from '../util/idGenerator'

// Since we're not using a server, we're generating IDs on the client.
// The following variables are id generator functions.  We pass the
// current max id + 1 so we don't have ID collisions.
const studentIds = ids(getNextId(getStudents()))
const testIds = ids(getNextId(getTests()))
function getNextId(items = []) {
  return R.isEmpty(items) ? 0 : R.apply(Math.max, R.map(R.prop('id'), items)) + 1
}

/**
  API function to add a student to the gradebook.  If we were using a real
  backend server, this functions contents would be replaced with a fetch call
  to POST /students.
  @param {string} name - Student's name
*/
export function addStudent(name : string) : Student {
  const students : Array<Student> = getStudents()
  students.push({
    id: studentIds.next().value,
    name,
    grades: {}
  })
  setStudents(students)
  return R.last(students)
}

/**
  API function to remove a student from the gradebook.  If we were using a real
  backend server, this functions contents would be replaced with a fetch call
  to DELETE /students.
  @param {int} id - Student's id
  @returns {Student} - Student that was deleted
*/
export function deleteStudent(id : int) : Student {
  const students : Array<Student> = getStudents()
  const i = R.findIndex(R.propEq('id', id), students)
  setStudents(R.remove(i, 1, students))
  return students[i]
}

/**
  API function to edit a student's name.  If we were using a real
  backend server, this functions contents would be replaced with a fetch call
  to PUT /students/{id}.
  @param {int} id - Student's id
  @returns {Student} - Student that was deleted
*/
export function editStudent(id : int, name : string) : Student {
  const students : Array<Student> = getStudents()
  const i = R.findIndex(R.propEq('id', id), students)
  students[i].name = name
  setStudents(students)
  return students[i]
}


/**
  API function to add a test to the gradebook.  If we were using a real
  backend server, this functions contents would be replaced with a fetch call
  to POST /tests.
  @param {string} name - Test title/name
  @param {string} name - Test's date
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
  @returns {Gradebook} Object representing the gradebook.
*/
export function fetchGradebook() : Gradebook {
  return {
    students: getStudents(),
    tests: getTests()
  }
}

/**
  API function to add a test to the gradebook.  If we were using a real
  backend server, this functions contents would be replaced with a fetch call
  to POST /tests/1.
  @param {int} studentId - Student's ID
  @param {int} testId - Test's ID
  @param {int} grade - Student's grade on the test
  @returns {void}
*/
export function changeGrade(studentId : int, testId : int, grade : int) : void {
  const students : Array<Student> = getStudents()
  const student = R.find(R.propEq('id', studentId), students)
  student.grades[testId] = grade
  setStudents(students)
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
