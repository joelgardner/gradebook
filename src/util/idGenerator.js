/**
  Generator function that yields the natural numbers.
  Used for generation of IDs, which would usually happen on the server.
*/
export default function* id() {
  let i = 0;
  while(true) {
    yield i++;
  }
}
