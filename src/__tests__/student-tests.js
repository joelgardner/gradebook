import id from '../util/idGenerator'

test('student id generation should work', () => {
  const idGen = id()
  expect(idGen.next().value).toBe(0);
  expect(idGen.next().value).toBe(1);
  expect(idGen.next().value).toBe(2);
});
