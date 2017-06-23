### Gradebook App

#### Technologies
Built with React, Redux, and Redux-Saga.  Used Bulma.css for styling.  Flow for strong-typing.

#### Behavior
- To add a test, click the *Add Test* button at the top.
- To add a student, click the *Add Student* button at the top.
- Edit student names in-line.
- Enter/edit grades in each cell.
- Delete a student via the delete button on the left, in the student's row.
- Statistics (min/max/average) are displayed at the bottom of a test's column and will update once a grade is changed.

There is the concept of the "active test," which is the test whose column is colored pale green.  The active test determines what students will be highlighted in red: if the student has failed the active test, s/he will be highlighted red.

#### Views
Main view components:
- `Gradebook.js` - Basic layout (table) of the gradebook
- `InputCell.js` - Encapsulates cell behavior/validation

#### API
- `api/index.js` - Performs data persistence to/from `localStorage`.

#### Types
- `types/index.js` - Defines Flow types for `Gradebook`, `Student`, and `Test`.


#### Redux logic:
- `containers/Gradebook.js` - Container for `Gradebook.js`.  Maps actions to UI events, presents props.
- `reducers/index.js` - Takes action results, and returns mutated application state (e.g., adds students/tests, updates grades and statistics, etc.).
- `actions/index.js` - Action creators for things that can "happen" in the app.
- `sagas.js` - Listens for dispatched actions, executes API calls, dispatches API call results to reducer, which returns mutated app state.

#### TODO:
Stuff that I would do if this was a real project / I had more time:
- Add ability to delete a test.
- Add "frozen" row and column headers so that scrolling would always have the headers displayed.
- Add more comprehensive typing information (via Flow)
- Write more tests!  In `__tests__` there is a single, lonely test in `student-tests.js` and a few reducer tests in `reducer-tests.js`.
