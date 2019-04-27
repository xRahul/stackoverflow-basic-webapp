import React from 'react'
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap'


export default class QuestionListElement extends React.Component {

  createMarkup(markUp) {
    return {__html: markUp};
  }

  render() {
      return (
        <Card>
          <Card.Body>
            <Card.Title
              dangerouslySetInnerHTML={this.createMarkup(this.props.title)} />
            <Card.Text
              dangerouslySetInnerHTML={this.createMarkup(this.props.body.substring(0, 200).concat('...'))} />
            <Card.Text >
              <a href={this.props.link} target={'blank'} style={{ textDecoration: 'none' }}>
                StackOverflow
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      );
  }
}

QuestionListElement.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string
};