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
    <button onClick={() => addStudent(`New Student`)}>Add Student</button>
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
              <InputCell value={s.name} allowString={true} valueChanged={name => editStudent(s.id, name)} />
            </th>
            {tests.map(t =>
              <td key={t.id}>
                <InputCell value={s.grades[t.id]} valueChanged={grade => changeGrade(s.id, t.id, R.defaultTo(undefined, grade))} />
              </td>
            )}
          </tr>
        )}
        <tr className="min">
          <td colSpan="2">Min</td>
          {tests.map(t =>
            <td key={t.id}>
              {t.min}
            </td>
          )}
        </tr>
        <tr className="max">
          <td colSpan="2">Max</td>
          {tests.map(t =>
            <td key={t.id}>
              {t.max}
            </td>
          )}
        </tr>
        <tr className="avg">
          <td colSpan="2">Average</td>
          {tests.map(t =>
            <td key={t.id}>
              {t.avg}
            </td>
          )}
        </tr>
      </tbody>
    </table>
  </div>

export default Gradebook
