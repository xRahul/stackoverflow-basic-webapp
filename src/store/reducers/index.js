import {
  combineReducers
} from 'redux'
import questionsByTag from './questions'

const rootReducer = combineReducers({
  questionsByTag
})

export default rootReducer