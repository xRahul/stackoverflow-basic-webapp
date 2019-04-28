import fetch from 'cross-fetch'

export const GET_QUESTION_DETAILS = 'GET_QUESTION_DETAILS'
function getQuestionDetails(questionId) {
  return {
    type: GET_QUESTION_DETAILS,
    questionId
  }
}

export const RECEIVE_QUESTION_DETAILS = 'RECEIVE_QUESTION_DETAILS'
function receiveQuestionDetails(questionId, json) {
  return {
    type: RECEIVE_QUESTION_DETAILS,
    questionId,
    questionDetails: json,
    receivedAt: Date.now()
  }
}

export const ERROR_RECEIVING_QUESTION_DETAILS = 'ERROR_RECEIVING_QUESTION_DETAILS'
export function errorReceivingQuestionDetails(questionId, errorMessage) {
  return {
    type: ERROR_RECEIVING_QUESTION_DETAILS,
    questionId,
    errorMessage
  }
}

export const fetchQuestionDetails = function (questionId) {
  return dispatch => {
    dispatch(getQuestionDetails(questionId))
    return fetch(`https://api.stackexchange.com/2.2/questions/${questionId}?order=desc&sort=activity&site=stackoverflow&filter=!51HTqDFxBs5q365jR-o6KJTubZZDbm.9HHcFra`)
      .then(response => response.json())
      .then(json => {
        if ('error_id' in json) {
          dispatch(errorReceivingQuestionDetails(questionId, json.error_message))
        } else {
          dispatch(receiveQuestionDetails(questionId, json))
        }
      })
      .catch(() => dispatch(errorReceivingQuestionDetails(questionId)))
  }
}
