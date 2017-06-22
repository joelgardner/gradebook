import api from '../api'
import { StudentCtor } from '../types/student'

test('student id generation should work', () => {
  expect(new StudentCtor("Hank", "Hill").id).toBe(0);
  expect(new StudentCtor("Peggy", "Hill").id).toBe(1);
  expect(new StudentCtor("Bobby", "Hill").id).toBe(2);
});
