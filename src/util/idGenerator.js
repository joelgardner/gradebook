/**
  Generator function that yields the natural numbers.
  Used for generation of IDs, which would usually happen on the server.
  @param {number} startAt - Optional number to start counting at.  Default is 0.
*/
export default function* id(startAt = 0) {
  let i = startAt;
  while(true) {
    yield i++;
  }
}
