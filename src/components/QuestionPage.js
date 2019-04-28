import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import QuestionDetails from './QuestionDetails'
import AnswerList from './AnswerList'
import Loader from './Loader';
import AnswersFilterTag from '../containers/AnswersFilterTag'
import { Form } from 'react-bootstrap'
import Header from './Header';


export default class QuestionPage extends React.Component {

  componentDidMount() {
    this.props.fetchQuestionData(this.props.questionId)
  }

  render() {
    const question = this.props.question
    return (
      <Container>
        <Header />
        {this.props.hasError &&
          <Form.Text className="text-muted">
            {this.props.errorMessage}
          </Form.Text>
        }
        {this.props.isFetching && <Loader/>}
        {!this.props.isFetching && !this.props.hasError && question &&
          <>
            <QuestionDetails
              key={question.question_id}
              questionId={question.question_id}
              link={question.link}
              title={question.title}
              body={question.body}
              tags={question.tags}
              isAnswered={question.is_answered}
              answerCount={question.answer_count}
              score={question.score}
              upvotes={question.up_vote_count}
              downvotes={question.down_vote_count}
            />
            <AnswersFilterTag />
            <AnswerList
              filterBy={this.props.filterBy}
              answers={question.answers}
            />
          </>
        }
      </Container>
    );
  }
}

QuestionPage.propTypes = {
  isFetching: PropTypes.bool,
  filterBy: PropTypes.string,
  questionId: PropTypes.string,
  question: PropTypes.object,
  fetchQuestionData: PropTypes.func,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string
}