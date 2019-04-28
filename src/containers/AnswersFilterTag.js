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
    state.questionsById.questionsByIds.hasOwnProperty(state.questionsByTag.currentTag) &&
    state.questionsByTag.questionsByTags[state.questionsByTag.currentTag].hasOwnProperty('items')) {
    showFilterTag = state.questionsByTag.questionsByTags[state.questionsByTag.currentTag].items.length > 0
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