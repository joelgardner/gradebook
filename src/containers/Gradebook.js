import { connect } from 'react-redux'
import Gradebook from '../components/Gradebook'
import {
  addStudent,
  deleteStudent,
  editStudent,
  addTest,
  changeGrade
} from '../actions'

const mapStateToProps = state => ({
  students: state.students,
  tests: state.tests
})

const mapDispatchToProps = {
  addStudent,
  deleteStudent,
  editStudent,
  addTest,
  changeGrade
}

const GradebookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gradebook)

export default GradebookContainer
