import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import QuestionDetails from './QuestionDetails'
import AnswerList from './AnswerList'
import Loader from './Loader';
import AnswersFilterTag from '../containers/AnswersFilterTag'
import { Form } from 'react-bootstrap'


export default class QuestionPage extends React.Component {

  componentDidMount() {
    this.props.fetchQuestionData(this.props.questionId)
  }

  render() {
    const question = this.props.question
    return (
      <Container>
        <h1 style={{marginTop: 20, marginBottom: 30}}>
          Stackoverflow Basic View
        </h1>
        {this.props.hasError &&
          <Form.Text className="text-muted">
            {this.props.errorMessage}
          </Form.Text>
        }
        {this.props.isLoading && <Loader/>}
        {!this.props.isLoading && !this.props.hasError && question &&
          <>
            <QuestionDetails
              key={question.question_id}
              questionId={question.question_id}
              link={question.link}
              title={question.title}
              body={question.body}
              titleAsHeader={true}
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
  isLoading: PropTypes.bool,
  filterBy: PropTypes.string,
  questionId: PropTypes.string,
  question: PropTypes.object,
  fetchQuestionData: PropTypes.func,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string
}