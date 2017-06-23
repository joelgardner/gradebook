import { tests, students } from '../reducers'
import { addTestCompleted, addStudentCompleted, CHANGE_GRADE_COMPLETED } from '../actions'

test('ADD_TEST_COMPLETED should mutate state, adding a test', () => {
  expect(tests(undefined, addTestCompleted({
    id: 0,
    name: "Test Test!",
    date: "fake date"
  }))).toEqual([{
    id: 0,
    name: "Test Test!",
    date: "fake date"
  }])
});

test('ADD_STUDENT_COMPLETED should mutate state, adding a test', () => {
  expect(students(undefined, addStudentCompleted({
    id: 0,
    name: "Test Student"
  }))).toEqual([{
    id: 0,
    name: "Test Student",
    grades: {}
  }])
});

test('CHANGE_GRADE_COMPLETED should set min/max/avg', () => {
  expect(tests([{
    id: 0,
    name: "Test Test!",
    date: "fake date",
  }], {
    type: CHANGE_GRADE_COMPLETED,
    studentId: 0,
    testId: 0,
    grade: 50,
    gradebook: { students: [{id: 0, name: "Bob", grades: { 0: 50 } }], tests: [{ id: 0, name: "Test Test" }] }
  })).toEqual([{
    id: 0,
    name: "Test Test!",
    date: "fake date",
    min: '50.00',
    max: '50.00',
    avg: '50.00'
  }])
});
