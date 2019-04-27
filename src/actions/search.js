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
export function errorReceivingQuestionsByTag(tag) {
  return {
    type: ERROR_RECEIVING_QUESTIONS_BY_TAG,
    tag
  }
}

export const fetchQuestionsByTag = function (tag) {
  return dispatch => {
    dispatch(getQuestionsByTag(tag))
    return fetch(`https://api.stackexchange.com/2.2/tags/${tag}/faq?site=stackoverflow&filter=!9Z(-wwYGT`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveQuestionsByTag(tag, json))
      })
      .catch(() => dispatch(errorReceivingQuestionsByTag(tag)))
  }
}