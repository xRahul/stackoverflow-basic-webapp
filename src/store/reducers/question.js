import {
  GET_QUESTION_DETAILS,
  RECEIVE_QUESTION_DETAILS,
  ERROR_RECEIVING_QUESTION_DETAILS,
  FILTER_ANSWERS_BY_STRING
} from '../../actions'


export default function question(state = {
  isFetching: false,
  hasError: false,
  questionsByIds: {},
  errorMessage: '',
  currentQuestionId: '',
  filterBy: ''
}, action) {
  switch (action.type) {
    case ERROR_RECEIVING_QUESTION_DETAILS:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        currentQuestionId: action.questionId,
        errorMessage: action.errorMessage
      })
    case GET_QUESTION_DETAILS:
      return Object.assign({}, state, {
        isFetching: true,
        currentQuestionId: action.questionId,
        errorMessage: '',
        hasError: false
      })
    case RECEIVE_QUESTION_DETAILS:
      return Object.assign({}, state, {
        isFetching: false,
        currentQuestionId: action.questionId,
        errorMessage: '',
        hasError: false,
        questionsByIds: Object.assign({}, state.questionsByIds, {
          [action.questionId]: action.questionDetails.items[0]
        }),
      })
    case FILTER_ANSWERS_BY_STRING:
      return Object.assign({}, state, {
        filterBy: action.searchString
      })
    default:
      return state
  }
}