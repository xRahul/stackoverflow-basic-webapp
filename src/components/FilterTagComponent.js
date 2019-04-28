import React from 'react'
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap'


export default class FilterTagComponent extends React.Component {

  constructor(props) {
    super(props)
    this._handleChange = this._handleChange.bind(this)
  }

  _handleChange(e) {
    this.props.filterList(e.target.value);
  }

  render() {
      return (
        <>
        { this.props.showFilterTag &&
          <Form>
            <Form.Group controlId={"formFilterTagControlId" + this.props.filterType}>
              <Form.Label>Filter {this.props.filterType}s:</Form.Label>
              <Form.Control type="text" placeholder="Search string"
                onChange={this._handleChange}
              />
            </Form.Group>
          </Form>
        }
        </>
      );
  }
}

FilterTagComponent.propTypes = {
  filterList: PropTypes.func,
  showFilterTag: PropTypes.bool,
  filterType: PropTypes.string
};