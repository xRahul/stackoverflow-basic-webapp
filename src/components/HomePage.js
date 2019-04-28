import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap'
import SearchTag from '../containers/SearchTag'
import Questions from '../containers/Questions';
import QuestionsFilterTag from '../containers/QuestionsFilterTag';
import Header from './Header';

function HomePage({ match: { params: { tagName } } }) {
  return (
    <Container>
      <Header />
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
