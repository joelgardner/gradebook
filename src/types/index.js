// @flow

export type Gradebook = {
  students: Array<Student>
  tests:    Map<string, Array<Test>>
}

export type Student = {
  id        : string,
  name      : string,
  grades    : Map<string, number>
}

export type Test = {
  id        : string;
  student   : Student;
  grade     : number;
}
