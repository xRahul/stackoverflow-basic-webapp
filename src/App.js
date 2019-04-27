import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap'
import SearchTag from './containers/SearchTag'
import Questions from './containers/Questions';
import FilterTag from './containers/FilterTag';

function App() {
  return (
    <Container>
      <h1 style={{marginTop: 20, marginBottom: 30}}>Stackoverflow Basic View</h1>
      <SearchTag />
      <FilterTag />
      <Questions />
    </Container>
  );
}

export default App;
