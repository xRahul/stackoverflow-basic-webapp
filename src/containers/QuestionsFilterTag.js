import {
  connect
} from 'react-redux'
import FilterTagComponent from '../components/FilterTagComponent';
import {
  filterQuestionsByString
} from '../actions'

const mapStateToProps = (state) => {
  var showFilterTag
  if (state.questionsByTag.hasOwnProperty('questionsByTags') &&
    state.questionsByTag.questionsByTags.hasOwnProperty(state.questionsByTag.currentTag)) {
    showFilterTag = state.questionsByTag.questionsByTags[state.questionsByTag.currentTag].items.length > 0
  }
  return {
    showFilterTag,
    filterType: 'Question'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterList: (searchString) => {
      dispatch(filterQuestionsByString(searchString))
    }
  }
}


const QuestionsFilterTag = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterTagComponent)

export default QuestionsFilterTag