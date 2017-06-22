import React from 'react'
import InputCell from './InputCell'
import R from 'ramda'

const Gradebook = ({
    students,
    tests,
    addStudent,
    deleteStudent,
    editStudent,
    addTest,
    changeGrade
  }) =>
  <div>
    <div>Gradebook</div>
    <button onClick={() => addStudent(`Bill ${new Date().getTime().toString()}`)}>Add Student</button>
    <button onClick={() => addTest("Test", new Date().getTime().toString())}>Add Test</button>
    <table>
      <thead>
        <tr>
          <th colSpan="2">
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
            <td>
              <button onClick={() => deleteStudent(s.id)}>delete</button>
            </td>
            <th>
              <InputCell value={s.name} valueChanged={name => editStudent(s.id, name)} />
            </th>
            {tests.map(t =>
              <td key={t.id}>
                <InputCell value={s.grades.get(t.id.toString())} valueChanged={grade => changeGrade(s.id, t.id, R.defaultTo(undefined, grade))} />
              </td>
            )}
          </tr>
        )}
      </tbody>

    </table>

  </div>

export default Gradebook
