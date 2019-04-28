import React from 'react'
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap'
import AnswerDetails from './AnswerDetails';


export default class AnswerList extends React.Component {

  render() {
    const answers = this.props.answers;
    const listItems = answers ? answers.filter((answer) => {
      if (!this.props.filterBy) return true
      return answer.body.indexOf(this.props.filterBy) !== -1
    }).map((answer, index) =>
      <AnswerDetails
        key={answer.answer_id}
        link={answer.link}
        body={answer.body}
        truncateBody={false}
        answerId={answer.answer_id}
        isAccepted={answer.is_accepted}
        score={answer.score}
        upvotes={answer.up_vote_count}
        downvotes={answer.down_vote_count}
        borderColor={index%2===0 ? 'warning' : 'info' }
      />
    ) : []

    return (
      <>
      {answers && answers.length === 0 &&
        <Form.Text className="text-muted">There are no answers!</Form.Text>
      }
      {answers && answers.length !== 0 && listItems.length === 0 &&
        <Form.Text className="text-muted">No matching answers found!</Form.Text>
      }
      {answers && answers.length !== 0 && listItems.length > 0 &&
        <Form.Text className="text-muted">Found: {listItems.length} matches</Form.Text>
      }
      <ul style={{marginTop: 20}}>{listItems}</ul>
      </>
    );
  }
}

AnswerList.propTypes = {
  answers: PropTypes.array,
  filterBy: PropTypes.string
}