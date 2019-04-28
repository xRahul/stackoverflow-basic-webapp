import React from 'react'
import PropTypes from 'prop-types'
import { Card, Badge } from 'react-bootstrap'
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

  titleInBody() {
    if (!this.props.titleAsHeader) {
      if (this.props.titleHasLink) {
        return (
          <NavLink to={`/question/` + this.props.questionId}>
            <Card.Title
              dangerouslySetInnerHTML={this.createMarkup(this.props.title)} />
          </NavLink>
        )
      }
      return (
        <Card.Title
          dangerouslySetInnerHTML={this.createMarkup(this.props.title)} />
      )
    } else return
  }

  titleInHeader() {
    if (this.props.titleAsHeader) {
      if (this.props.titleHasLink) {
        return (
          <NavLink to={`/question/` + this.props.questionId}>
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
    } else return
  }

  listTags() {
    return this.props.tags.map((tag) => {
      return (
        <Badge key={tag} pill variant="secondary" style={{ marginRight: 5 }}>{tag}</Badge>
      )
    })
  }

  render() {
      return (
        <Card style = {{marginBottom: 20}}>
          {this.titleInHeader()}
          <Card.Body>
            {this.titleInBody()}
            <Card.Text dangerouslySetInnerHTML={this.setBody()} />
            <Card.Text >
              <a href={this.props.link} target={'blank'} style={{ textDecoration: 'none' }}>
                StackOverflow
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Body>
            {this.listTags()}
          </Card.Body>
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
  tags: PropTypes.array
}