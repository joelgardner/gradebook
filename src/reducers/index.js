import { combineReducers } from 'redux'
//import R from 'ramda'
//import { FETCH_LIMIT } from '../constants'
import {
  ADD_STUDENT_COMPLETED
} from '../actions'

function students(state = [], action) {
    switch (action.type) {
      case ADD_STUDENT_COMPLETED:
        return state.slice().push(action.student)
      default:

    }
    return state;
}

function grades(state = {}, action) {
    switch (action.type) {
      //case ADD_STUDENT_COMPLETED:
        //return state.slice().push(action.student)
    }
    return state;
}

export default combineReducers({
  students,
  grades
})
