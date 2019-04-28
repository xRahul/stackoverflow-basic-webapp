import {
  connect
} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import QuestionPage from '../components/QuestionPage'
import { fetchQuestionDetails } from '../actions'

const mapStateToProps = (state, ownProps) => {
  const questionId = ownProps.match.params.questionId
  const isFetching = state.questionsById ? state.questionsById.isFetching : false
  const filterBy = state.questionsById ? state.questionsById.filterBy : ''
  const hasError = state.questionsById ? state.questionsById.hasError : false
  const errorMessage = state.questionsById ? state.questionsById.errorMessage : ''
  var question
  if (state.questionsById.hasOwnProperty('questionsByIds') &&
    state.questionsById.questionsByIds.hasOwnProperty(questionId)) {
    question = state.questionsById.questionsByIds[questionId]
  }
  return {
    isFetching,
    filterBy,
    questionId,
    question,
    hasError,
    errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestionData: (questionId) => dispatch(fetchQuestionDetails(questionId))
  }
}

const QuestionPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionPage)

export default QuestionPageContainer