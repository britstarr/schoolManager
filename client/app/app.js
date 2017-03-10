import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import Main from './Main.js';
import Home from './Home.js';
import Edit from './Edit.js';

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Home} />
          <Route path="/edit" component={Edit} />
        </Route>
      </Router>
    );
  }
}

// http://stackoverflow.com/questions/34169068/passing-state-via-this-history-pushstate
/*
  edit & delete - pass the clicked item through state
  create new school - pass back through the state to render on main
  filter the entire list
*/
