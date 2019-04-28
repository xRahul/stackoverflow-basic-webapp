import React from 'react'
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap'
import QuestionDetails from './QuestionDetails'
import Loader from './Loader';


export default class QuestionList extends React.Component {

  render() {
    const questions = this.props.questions;
    const listItems = questions ? questions.filter((question) => {
      if (!this.props.filterBy) return true
      return question.title.indexOf(this.props.filterBy) !== -1
        || question.body.indexOf(this.props.filterBy) !== -1
    }).map((question, index) =>
      <QuestionDetails
        key={question.question_id}
        link={question.link}
        title={question.title}
        body={question.body}
        truncateBody={true}
        titleHasLink={true}
        questionId={question.question_id}
        tags={question.tags}
        isAnswered={question.is_answered}
        answerCount={question.answer_count}
        score={question.score}
        upvotes={question.up_vote_count}
        downvotes={question.down_vote_count}
        borderColor={index%2===0 ? 'warning' : 'info' }
      />
    ) : []
    return (
      <>
      {questions && questions.length === 0 &&
        <Form.Text className="text-muted">No questions found for the given Tag!</Form.Text>
      }
      {questions && questions.length !== 0 && listItems.length === 0 &&
        <Form.Text className="text-muted">No matching questions found!</Form.Text>
      }
      {questions && questions.length !== 0 && listItems.length > 0 &&
        <Form.Text className="text-muted">Found: {listItems.length} matches</Form.Text>
      }
      {this.props.hasError &&
        <Form.Text className="text-muted">
          {this.props.errorMessage}
        </Form.Text>
      }
      {this.props.isFetching && <Loader/>}
      {!this.props.isFetching && !this.props.hasError && <ul style={{marginTop: 20}}>{listItems}</ul>}
      </>
    );
  }
}

QuestionList.propTypes = {
  isFetching: PropTypes.bool,
  questions: PropTypes.array,
  filterBy: PropTypes.string,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string
}