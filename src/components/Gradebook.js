import React from 'react'
import InputCell from './InputCell'
import R from 'ramda'

const Gradebook = ({ students, tests, addStudent, addTest, changeGrade }) =>
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
                <InputCell grade={s.grades.get(t.id.toString())} changeGrade={grade => changeGrade(s.id, t.id, R.defaultTo(undefined, grade))} />
              </td>
            )}
          </tr>
        )}
      </tbody>

    </table>

  </div>

export default Gradebook
