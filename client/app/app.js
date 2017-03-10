import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Main from './Main.js';
import Home from './Home.js';

export default class App extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route component={ Main }>
          <Route path="/" component={ Home } />
        </Route>
      </Router>
    );
  }
}
