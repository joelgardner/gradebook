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
    changeGrade,
    activeTestId,
    changeActiveTest
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
            <th onClick={e => changeActiveTest(t.id)} key={t.id} style={activeTestId === t.id ? { backgroundColor:'#0f0' } : null}>
              {t.name}
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {students.map((s, i) =>
          <tr key={s.id}>
            <td>
              <button onClick={() => deleteStudent(s.id)} tabIndex="-1">delete</button>
            </td>
            <th>
              <InputCell value={s.name} allowStrings={true} valueChanged={name => editStudent(s.id, name)} tabIndex="-1" />
            </th>
            {tests.map((t, j) =>
              <td key={t.id} style={activeTestId === t.id ? { backgroundColor:'#0f0' } : null} >
                <InputCell
                  value={s.grades[t.id]}
                  tabIndex={(j * students.length) + i + 1}
                  valueChanged={grade => changeGrade(s.id, t.id, R.defaultTo(undefined, grade))}
                  onFocus={e => { if (activeTestId !== t.id) changeActiveTest(t.id) }}
                />
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
