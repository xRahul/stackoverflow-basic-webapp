import {
  connect
} from 'react-redux'
import QuestionList from '../components/QuestionList';

const mapStateToProps = (state) => {
  const isFetching = state.questionsByTag ? state.questionsByTag.isFetching : false
  const hasError = state.questionsByTag ? state.questionsByTag.hasError : false
  const errorMessage = state.questionsByTag ? state.questionsByTag.errorMessage : ''
  var questions, filterBy
  if (state.questionsByTag.hasOwnProperty('questionsByTags') &&
    state.questionsByTag.questionsByTags.hasOwnProperty(state.questionsByTag.currentTag)) {
    questions = state.questionsByTag.questionsByTags[state.questionsByTag.currentTag].items
    filterBy = state.questionsByTag.filterBy
  }

  return {
    isFetching,
    questions,
    filterBy,
    hasError,
    errorMessage
  }
}

const mapDispatchToProps = () => {
  return {
    //
  }
}


const Questions = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionList)

export default Questions