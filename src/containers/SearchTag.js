import {
  connect
} from 'react-redux'
import SearchTagComponent from '../components/SearchTagComponent';
import {
  fetchQuestionsByTag, updateSearchValueOnHomePage
} from '../actions/search'
import { withRouter } from "react-router"

const mapStateToProps = (state, ownProps) => {
  const urlTagName = ownProps.urlTagName
  const searchValue = state.questionsByTag ? state.questionsByTag.searchValue : ''
  var availableQuota, totalQuota
  if (state.questionsByTag.hasOwnProperty('questionsByTags') &&
    state.questionsByTag.questionsByTags.hasOwnProperty(state.questionsByTag.currentTag)) {
    availableQuota = state.questionsByTag.questionsByTags[state.questionsByTag.currentTag].quota_remaining
    totalQuota = state.questionsByTag.questionsByTags[state.questionsByTag.currentTag].quota_max
  }

  return {
    availableQuota,
    totalQuota,
    urlTagName,
    searchValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: (tagName) => {
      dispatch(fetchQuestionsByTag(tagName))
    },
    updateSearchValue: (value) => {
      dispatch(updateSearchValueOnHomePage(value))
    }
  }
}


const SearchTag = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTagComponent))

export default SearchTag