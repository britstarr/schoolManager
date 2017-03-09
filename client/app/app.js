import React, {Component} from 'react';
import {browserHistory, Router, Route} from 'react-router';
import Main from './Main.js';
import Home from './Home.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route component={Main}>
            <Route path='/' component={Home} />
          </Route>
        </Router>
      </div>
    );
  }
}
