// @flow
import ids from '../util/idGenerator'

export type Student = {
  id        : string,
  firstName : string,
  lastName  : string,
  grades    : Map<string, number>
}

/**
  Represents a student.
  @constructor
  @param {string} firstName - Student's first name
  @param {string} lastName - Student's last name
*/
export function StudentCtor(firstName, lastName) {
  this.id = this.ids.next().value
  this.firstName = firstName
  this.lastName = lastName
  this.grades = []
}
/** StudentCtor inherits a method to generate an ID */
StudentCtor.prototype = Object.create({ ids: ids() })
