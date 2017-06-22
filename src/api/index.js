// @flow
import type { Student } from '../types/student'


/**
  API function to add a student to the gradebook.
  @param {string} firstName - Student's first name
  @param {string} lastName - Student's last name
*/
export function addStudent(firstName : string, lastName : string) : Student {
  const students : Array<Student> = getStudents()
  const student : Student = {
    id: 0,
    firstName,
    lastName,
    grades: []
  }
  students.push(students)
  setStudents(students)
  return student
}

/**
  API function to fetch gradebook information.
  @param {string} firstName - Student's first name
  @param {string} lastName - Student's last name
*/
export function fetchGradebook() : Gradebook {
  return {}
}

/**
 * Represents a student
 * @constructor
 * @param {string} firstName - Student's first name
 * @param {string} lastName - Student's last name
 */
function StudentCtor(firstName, lastName) {
  this.id = this.newId()
  this.firstName = firstName
  this.lastName = lastName
}



// for now, we're just using LocalStorage to persist student data.
// the next two methods be replaced with fetch calls if we were using a real server API.
function getStudents() : Array<Student> {
  const s : string = localStorage.getItem('students')
  return s ? JSON.parse(s) : []
}

function setStudents(students : Array<Student>) : void {
  localStorage.setItem('students', JSON.stringify(students))
}
