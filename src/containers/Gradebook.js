import { connect } from 'react-redux'
import Gradebook from '../components/Gradebook'
import {
  addStudent,
  deleteStudent,
  editStudent,
  addTest,
  changeGrade,
  changeActiveTest
} from '../actions'

const mapStateToProps = state => ({
  students: state.students,
  tests: state.tests,
  activeTestId: state.ui.activeTestId
})

const mapDispatchToProps = {
  addStudent,
  deleteStudent,
  editStudent,
  addTest,
  changeGrade,
  changeActiveTest
}

const GradebookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gradebook)

export default GradebookContainer
