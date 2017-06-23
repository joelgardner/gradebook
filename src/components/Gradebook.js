import React from 'react'
import InputCell from './InputCell'
import R from 'ramda'
import './Gradebook.css'

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
    <a className="button is-primary is-small add-button" onClick={() => addStudent(`New Student`)}>Add Student</a>
    <a className="button is-primary is-small add-button" onClick={() => addTest("Test", new Date().getTime())}>Add Test</a>
    <table className="table">
      <thead>
        <tr>
          <th colSpan="2">
            {/* empty header */}
          </th>
          {tests.map(t =>
            <th onClick={e => changeActiveTest(t.id)} key={t.id} className={activeTestId === t.id ? 'active-test' : null}>
              {t.name}
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {students.map((s, i) =>
          <tr key={s.id}>
            <td>
              <a className="button is-small" onClick={() => deleteStudent(s.id)} tabIndex="-1">delete</a>
            </td>
            <th className={`name ${s.grades[activeTestId] < 65 ? 'failing' : null}`}>
              <InputCell value={s.name} allowStrings={true} valueChanged={name => editStudent(s.id, name)} tabIndex="-1" />
            </th>
            {tests.map((t, j) =>
              <td key={t.id} className={`grade ${activeTestId === t.id ? 'active-test' : null}`} >
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
