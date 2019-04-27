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
    showFilterTag
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterQuestions: (searchString) => {
      dispatch(filterQuestionsByString(searchString))
    }
  }
}


const FilterTag = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterTagComponent)

export default FilterTag