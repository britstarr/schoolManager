import React, {Component} from 'react';
import { FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import data from '../../data/schools.json';
import { browserHistory } from 'react-router';

export default class Create extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: '',
      county: '',
      students: '',
      grades: ''
    }
  }

  handleChange(prop, input) {
    this.setState({
      [prop]: input.target.value
    });
  }

  handleSubmit() {
    //get last ID currently in list and add 1 to it
      //purposefully ignoring complexity since there's no db integration
    var len = data.length + 1;

    var newSchool = {
      ID: len,
      Name: this.state.name,
      County: this.state.county,
      Students: this.state.students,
      Grades: this.state.grades
    }

    data.push(newSchool);
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <form>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl
              id="name"
              type="text"
              value={this.state.name}
              placeholder="Enter text"
              onChange={this.handleChange.bind(this, 'name')}
            />
            <ControlLabel>County</ControlLabel>
            <FormControl
              id="county"
              type="text"
              value={this.state.county}
              placeholder="Enter text"
              onChange={this.handleChange.bind(this, 'county')}
            />
            <ControlLabel>Students</ControlLabel>
            <FormControl
              id="students"
              type="text"
              value={this.state.students}
              placeholder="Enter text"
              onChange={this.handleChange.bind(this, 'students')}
            />
            <ControlLabel>Grades</ControlLabel>
            <FormControl
              id="grades"
              type="text"
              value={this.state.grades}
              placeholder="Enter text"
              onChange={this.handleChange.bind(this, 'grades')}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit.bind(this)}>Add</Button>
        </form>
      </div>
    )
  }
}
