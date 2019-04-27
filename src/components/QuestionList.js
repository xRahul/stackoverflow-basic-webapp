import React from 'react'
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap'
import QuestionListElement from './QuestionListElement'
import Loader from './Loader';


export default class QuestionList extends React.Component {

  render() {
    const questions = this.props.questions;
    const listItems = questions ? questions.filter((question) => {
      if (!this.props.filterBy) return true
      return question.title.indexOf(this.props.filterBy) !== -1
        || question.body.indexOf(this.props.filterBy) !== -1
    }).map((question) =>
      <QuestionListElement
      key={question.question_id}
      link={question.link}
      title={question.title}
      body={question.body}
      />
    ) : []
    return (
      <>
      {questions && questions.length !== 0 && listItems.length === 0 &&
        <Form.Text className="text-muted">No matching questions found!</Form.Text>
      }
      {questions && questions.length !== 0 && listItems.length > 0 &&
        <Form.Text className="text-muted">Found: {listItems.length} matches</Form.Text>
      }
      {this.props.isLoading && <Loader/>}
      {!this.props.isLoading && <ul style={{marginTop: 20}}>{listItems}</ul>}
      </>
    );
  }
}

QuestionList.propTypes = {
  isLoading: PropTypes.bool,
  questions: PropTypes.array,
  filterBy: PropTypes.string
};