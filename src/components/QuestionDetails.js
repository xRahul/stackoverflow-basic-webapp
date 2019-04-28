import React from 'react'
import PropTypes from 'prop-types'
import { Card, Badge, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


export default class QuestionDetails extends React.Component {

  createMarkup(markUp) {
    return {__html: markUp}
  }

  setBody() {
    if (this.props.truncateBody) {
      return this.createMarkup(this.props.body.substring(0, 200).concat('...'))
    }
    return this.createMarkup(this.props.body)
  }

  title() {
    if (this.props.titleHasLink) {
      return (
        <NavLink to={`/question/` + this.props.questionId} style={{ textDecoration: 'none', color: 'black' }}>
          <Card.Header>
            <Card.Title
              dangerouslySetInnerHTML={this.createMarkup(this.props.title)} />
          </Card.Header>
        </NavLink>
      )
    }
    return (
      <Card.Header>
        <Card.Title
          dangerouslySetInnerHTML={this.createMarkup(this.props.title)} />
      </Card.Header>
    )
  }

  listTags() {
    return this.props.tags.map((tag) => {
      return (
        <NavLink key={tag} to={`/` + tag} style={{ textDecoration: 'none' }}>
          <Badge pill variant="secondary" style={{ marginRight: 5 }}>{tag}</Badge>
        </NavLink>
      )
    })
  }

  render() {
      return (
        <Card style = {{marginBottom: 20}} border={this.props.borderColor}>
          {this.title()}
          <Card.Body>
            <Card.Text dangerouslySetInnerHTML={this.setBody()} />
            <Card.Text >
              <a href={this.props.link} target={'blank'} style={{ textDecoration: 'none' }}>
                StackOverflow
              </a>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              {this.props.isAnswered &&
                <Button variant="success" style={{ marginRight: 5 }}>
                  Answered
                  <span className="sr-only">Accepted Answer</span>
                </Button>
              }
              {this.props.answerCount !== undefined &&
                <Button variant="light" style={{ marginRight: 5 }}>
                  Answers <Badge variant="dark">{this.props.answerCount}</Badge>
                  <span className="sr-only">Answer Count</span>
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
            <ListGroupItem>
            {this.listTags()}
            </ListGroupItem>
          </ListGroup>
        </Card>
      )
  }
}

QuestionDetails.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  truncateBody: PropTypes.bool,
  titleHasLink: PropTypes.bool,
  titleAsHeader: PropTypes.bool,
  questionId: PropTypes.number,
  tags: PropTypes.array,
  isAnswered: PropTypes.bool,
  answerCount: PropTypes.number,
  score: PropTypes.number,
  upvotes: PropTypes.number,
  downvotes: PropTypes.number,
  borderColor: PropTypes.string
}