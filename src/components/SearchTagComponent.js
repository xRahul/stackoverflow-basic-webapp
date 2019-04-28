import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'


export default class SearchTagComponent extends React.Component {

  constructor(props) {
    super(props)
    this.searchInput = props.urlTagName
    this._handleKeyDown = this._handleKeyDown.bind(this)
    this._handleChange = this._handleChange.bind(this)
  }

  componentDidMount() {
    if (this.searchInput) {
      this.props.fetchQuestions(this.searchInput)
    }
  }

  _handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (this.searchInput) {
        this.props.fetchQuestions(this.searchInput)
        this.props.history.push('/' + this.searchInput)
      }

    }
  }

  _handleChange(e) {
    this.searchInput = e.target.value;
  }

  render() {
      return (
        <>
        {this.props.hasError &&
          <Form.Text className="text-muted">
            {this.props.errorMessage}
          </Form.Text>
        }
        {!this.props.hasError &&
          <Form>
            <Form.Group controlId="formSearchTagControlId">
              <Form.Label>Search Trending problems by tag:</Form.Label>
              <Form.Control type="text" placeholder="Tag name"
                defaultValue={this.searchInput}
                onKeyDown={this._handleKeyDown}
                onChange={this._handleChange}
              />
              <Form.Text className="text-muted">
                {this.props.availableQuota !== undefined &&
                  "Free Search Quota used: "+ this.props.availableQuota +  "/" + this.props.totalQuota
                }
              </Form.Text>
            </Form.Group>
          </Form>
        }
        </>
      );
  }
}

SearchTagComponent.propTypes = {
  fetchQuestions: PropTypes.func,
  availableQuota: PropTypes.number,
  totalQuota: PropTypes.number,
  urlTagName: PropTypes.string,
  history: PropTypes.object,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string
};