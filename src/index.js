import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import QuestionPageContainer from './containers/QuestionPageContainer';
import configureStore from './store/store'
import * as serviceWorker from './serviceWorker'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/:tagName?" component={HomePage} />
      <Route path="/question/:questionId" component={QuestionPageContainer} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
