import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap'
import SearchTag from '../containers/SearchTag'
import Questions from '../containers/Questions';
import QuestionsFilterTag from '../containers/QuestionsFilterTag';

function HomePage({ match: { params: { tagName } } }) {
  return (
    <Container>
      <h1 style={{marginTop: 20, marginBottom: 30}}>Stackoverflow Basic View</h1>
      <SearchTag tagName={tagName} />
      <QuestionsFilterTag />
      <Questions />
    </Container>
  )
}

HomePage.propTypes = {
  match: PropTypes.object
};

export default HomePage;
