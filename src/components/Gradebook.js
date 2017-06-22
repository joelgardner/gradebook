import React from 'react'

const Gradebook = ({ students, tests, addStudent, addTest }) =>
  <div>
    <div>Gradebook</div>
    <button onClick={() => addStudent("Bill", new Date().getTime().toString())}>Add Student</button>
    <button onClick={() => addTest("Test", new Date().getTime().toString())}>Add Test</button>
    <table>
      <thead>
        <tr>
          <th>
            {/* empty header */}
          </th>
          {tests.map(t =>
            <th key={t.id}>
              {t.name}
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {students.map(s =>
          <tr key={s.id}>
            <th>
              {s.lastName}, {s.firstName}
            </th>
            {tests.map(t =>
              <td key={t.id}>
                <input type="text" defaultValue={s.grades[t.id]}></input>
              </td>
            )}
          </tr>
        )}
      </tbody>

    </table>

  </div>

export default Gradebook
