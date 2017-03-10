import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import axios from 'axios';

export default class Home extends Component {
  componentDidMount() {
    axios.get('/data')
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        throw err;
      });
  }

  render() {
    return (
      <div>
        <Panel className="panel">
          <h1>HOME</h1>
        </Panel>
      </div>
    );
  }
}
