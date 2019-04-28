import {
  combineReducers
} from 'redux'
import questionsByTag from './questions'
import questionsById from './question'

const rootReducer = combineReducers({
  questionsByTag,
  questionsById
})

export default rootReducer