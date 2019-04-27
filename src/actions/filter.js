export const FILTER_QUESTIONS_BY_STRING = 'FILTER_QUESTIONS_BY_STRING'
export function filterQuestionsByString(searchString) {
  return {
    type: FILTER_QUESTIONS_BY_STRING,
    searchString
  }
}