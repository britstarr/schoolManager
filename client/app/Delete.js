import React, {Component} from 'react';
import { Panel, FormGroup, FormControl, Button} from 'react-bootstrap';
import data from '../../data/schools.json';
import { browserHistory } from 'react-router';

export default class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.location.state.index,
      name: this.props.location.state.name
    }
  }

  componentDidMount() {
    delete data[this.state.index];
    browserHistory.push('/');
  }

  render() {
    return (
      <div></div>
    )
  }
}
