import {
  GET_QUESTIONS_BY_TAG,
  RECEIVE_QUESTIONS_BY_TAG,
  ERROR_RECEIVING_QUESTIONS_BY_TAG,
  FILTER_QUESTIONS_BY_STRING,
  UPDATE_SEARCH_VALUE_ON_HOME_PAGE
} from '../../actions'


export default function questions(
  state = {
    currentTag: '',
    filterBy: '',
    searchValue: '',
    isFetching: false,
    hasError: false,
    errorMessage: '',
    questionsByTags: Object.assign({}),
  },
  action
) {
  switch (action.type) {
    case ERROR_RECEIVING_QUESTIONS_BY_TAG:
      return Object.assign({}, state, {
        hasError: true,
        isFetching: false,
        currentTag: action.tag,
        filterBy: '',
        errorMessage: action.errorMessage
      })
    case GET_QUESTIONS_BY_TAG:
      return Object.assign({}, state, {
        isFetching: true,
        filterBy: '',
        currentTag: action.tag,
        hasError: false,
        errorMessage: ''
      })
    case RECEIVE_QUESTIONS_BY_TAG:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: false,
        errorMessage: '',
        filterBy: '',
        currentTag: action.tag,
        questionsByTags: Object.assign({}, state.questionsByTags, {
          [action.tag]: action.questions
        }),
      })
    case FILTER_QUESTIONS_BY_STRING:
      return Object.assign({}, state, {
        filterBy: action.searchString
      })
    case UPDATE_SEARCH_VALUE_ON_HOME_PAGE:
      return Object.assign({}, state, {
        searchValue: action.searchValue
      })
    default:
      return state
  }
}