import {
  connect
} from 'react-redux'
import SearchTagComponent from '../components/SearchTagComponent';
import {
  fetchQuestionsByTag
} from '../actions/search'

const mapStateToProps = (state) => {
  var availableQuota, totalQuota
  if (state.questionsByTag.hasOwnProperty('questionsByTags') &&
    state.questionsByTag.questionsByTags.hasOwnProperty(state.questionsByTag.currentTag)) {
    availableQuota = state.questionsByTag.questionsByTags[state.questionsByTag.currentTag].quota_remaining
    totalQuota = state.questionsByTag.questionsByTags[state.questionsByTag.currentTag].quota_max
  }

  return {
    availableQuota,
    totalQuota
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: (tagName) => {
      dispatch(fetchQuestionsByTag(tagName))
    }
  }
}


const SearchTag = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTagComponent)

export default SearchTag