import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import Main from './Main.js';
import Edit from './Edit.js';
import Delete from './Delete.js';
import Create from './Create.js';

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main} />
        <Route path="/edit" component={Edit} />
        <Route path="/delete" component={Delete} />
        <Route path="/create" component={Create} />
      </Router>
    );
  }
}
