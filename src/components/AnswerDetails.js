import React from 'react'
import PropTypes from 'prop-types'
import { Card, ListGroup, ListGroupItem, Badge, Button } from 'react-bootstrap'


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
        <Card style = {{marginBottom: 20}} border={this.props.borderColor}>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              {this.props.isAccepted &&
                <Button variant="success" style={{ marginRight: 5 }}>
                  Accepted
                  <span className="sr-only">Accepted Answer</span>
                </Button>
              }
              {this.props.score !== undefined &&
                <Button variant="info" style={{ marginRight: 5 }}>
                  Score <Badge variant="light">{this.props.score}</Badge>
                  <span className="sr-only">Answer Score</span>
                </Button>
              }
              {this.props.upvotes !== undefined &&
                <Button variant="dark" style={{ marginRight: 5 }}>
                  Upvotes <Badge variant="light">{this.props.upvotes}</Badge>
                  <span className="sr-only">Number of Upvotes</span>
                </Button>
              }
              {this.props.downvotes !== undefined &&
                <Button variant="secondary" style={{ marginRight: 5 }}>
                  DownVotes <Badge variant="light">{this.props.downvotes}</Badge>
                  <span className="sr-only">Number of DownVotes</span>
                </Button>
              }
            </ListGroupItem>
          </ListGroup>
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
  answerId: PropTypes.number,
  borderColor: PropTypes.string,
  isAccepted: PropTypes.bool,
  score: PropTypes.number,
  upvotes: PropTypes.number,
  downvotes: PropTypes.number
}