import {
  connect
} from 'react-redux'
import QuestionList from '../components/QuestionList';

const mapStateToProps = (state) => {
  const isLoading = state.questionsByTag.isFetching
  var questions, filterBy
  if (state.questionsByTag.hasOwnProperty('questionsByTags') &&
    state.questionsByTag.questionsByTags.hasOwnProperty(state.questionsByTag.currentTag)) {
    questions = state.questionsByTag.questionsByTags[state.questionsByTag.currentTag].items
    filterBy = state.questionsByTag.filterBy
  }

  return {
    isLoading,
    questions,
    filterBy
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