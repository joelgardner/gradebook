import { connect } from 'react-redux'
import Gradebook from '../components/Gradebook'
import { addStudent, addTest } from '../actions'

const mapStateToProps = state => console.log(state) || ({
  students: state.students,
  tests: state.tests
})

const mapDispatchToProps = {
  addStudent,
  addTest
}

const GradebookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gradebook)

export default GradebookContainer
