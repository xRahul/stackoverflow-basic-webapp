import {
  connect
} from 'react-redux'
import FilterTagComponent from '../components/FilterTagComponent';
import {
  filterAnswersByString
} from '../actions'

const mapStateToProps = (state) => {
  var showFilterTag
  if (state.questionsById.hasOwnProperty('questionsByIds') &&
    state.questionsById.questionsByIds.hasOwnProperty(state.questionsById.currentQuestionId) &&
    state.questionsById.questionsByIds[state.questionsById.currentQuestionId].hasOwnProperty('answers')) {
    showFilterTag = state.questionsById.questionsByIds[state.questionsById.currentQuestionId].answers.length > 0
  }
  return {
    showFilterTag,
    filterType: 'Answer'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterList: (searchString) => {
      dispatch(filterAnswersByString(searchString))
    }
  }
}


const AnswersFilterTag = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterTagComponent)

export default AnswersFilterTag