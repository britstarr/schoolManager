import React, { Component } from 'react';
import { FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import data from '../../data/schools.json';
import { browserHistory } from 'react-router';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.location.state.index,
      id: this.props.location.state.id,
      name: this.props.location.state.name,
      county: this.props.location.state.county,
      students: this.props.location.state.students,
      grades: this.props.location.state.grades
    }
  }

  handleChange(property, input) {
    this.setState({
      [property]: input.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    //pushing state/data updates for temporary data updates
    var update = {
      ID: this.state.id,
      Name: this.state.name,
      County: this.state.county,
      Students: this.state.students,
      Grades: this.state.grades
    }

    data[this.state.index] = update;
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <form>
          <h1>Editing {this.props.location.state.name}</h1>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl
              id="name"
              type="text"
              defaultValue={this.state.name}
              onChange={this.handleChange.bind(this, 'name')}
            />
            <ControlLabel>County</ControlLabel>
            <FormControl
              id="county"
              type="text"
              defaultValue={this.state.county}
              onChange={this.handleChange.bind(this, 'county')}
            />
            <ControlLabel>Students</ControlLabel>
            <FormControl
              id="students"
              type="text"
              defaultValue={this.state.students}
              onChange={this.handleChange.bind(this, 'students')}
            />
            <ControlLabel>Grades</ControlLabel>
            <FormControl
              id="grades"
              type="text"
              defaultValue={this.state.grades}
              onChange={this.handleChange.bind(this, 'grades')}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit.bind(this)}>Update</Button>
        </form>
      </div>
    )
  }
}
