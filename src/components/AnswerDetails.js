import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'


export default class AnswerDetails extends React.Component {

  createMarkup(markUp) {
    return {__html: markUp}
  }

  setBody() {
    if (this.props.truncateBody) {
      return this.createMarkup(this.props.body.substring(0, 200).concat('...'))
    }
    return this.createMarkup(this.props.body)
  }

  render() {
      return (
        <Card style = {{marginBottom: 20}}>
          <Card.Body>
            <Card.Text dangerouslySetInnerHTML={this.setBody()} />
            <Card.Text >
              <a href={this.props.link} target={'blank'} style={{ textDecoration: 'none' }}>
                StackOverflow
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      )
  }
}

AnswerDetails.propTypes = {
  link: PropTypes.string,
  body: PropTypes.string,
  truncateBody: PropTypes.bool,
  answerId: PropTypes.number
}