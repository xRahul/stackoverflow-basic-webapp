import fetch from 'cross-fetch'

export const GET_QUESTIONS_BY_TAG = 'GET_QUESTIONS_BY_TAG'
function getQuestionsByTag(tag) {
  return {
    type: GET_QUESTIONS_BY_TAG,
    tag
  }
}

export const RECEIVE_QUESTIONS_BY_TAG = 'RECEIVE_QUESTIONS_BY_TAG'
function receiveQuestionsByTag(tag, json) {
  return {
    type: RECEIVE_QUESTIONS_BY_TAG,
    tag,
    questions: json,
    receivedAt: Date.now()
  }
}

export const ERROR_RECEIVING_QUESTIONS_BY_TAG = 'ERROR_RECEIVING_QUESTIONS_BY_TAG'
export function errorReceivingQuestionsByTag(tag, errorMessage) {
  return {
    type: ERROR_RECEIVING_QUESTIONS_BY_TAG,
    tag,
    errorMessage
  }
}

export const UPDATE_SEARCH_VALUE_ON_HOME_PAGE = 'UPDATE_SEARCH_VALUE_ON_HOME_PAGE'
export function updateSearchValueOnHomePage(searchValue) {
  return {
    type: UPDATE_SEARCH_VALUE_ON_HOME_PAGE,
    searchValue
  }
}

export const fetchQuestionsByTag = function (tag) {
  return dispatch => {
    dispatch(getQuestionsByTag(tag))
    return fetch(`https://api.stackexchange.com/2.2/tags/${tag}/faq?site=stackoverflow&filter=!9Z(-wwYGT`)
      .then(response => response.json())
      .then(json => {
        if ('error_id' in json) {
          dispatch(errorReceivingQuestionsByTag(tag, json.error_message))
        } else {
          dispatch(receiveQuestionsByTag(tag, json))
        }
      })
      .catch(() => dispatch(errorReceivingQuestionsByTag(tag)))
  }
}