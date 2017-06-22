// @flow
import type Student from './student'
import type Test from './test'

export type Gradebook = {
  students: Array<Student>
  tests:    Map<string, Array<Test>>
}
