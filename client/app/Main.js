import React, {Component} from 'react';
import data from '../../data/schools.json';
import Row from './Row.js';
import { Button } from 'react-bootstrap';
import { Link, FormControl } from 'react-router';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      schools: []
    }
  }

  componentDidMount() {
    this.setState({
      schools: data
    });
  }

  handleChange(prop, input) {
    this.setState({
      [prop]: input.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="admin">
          <Link to="/create" className="create">Add New School</Link>
          <input className="search" type="text" placeholder="Search"/>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>County</th>
              <th>Name</th>
              <th>Students</th>
              <th>Grades</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.schools.map((school, i) => (
              <Row
                index={i}
                id={school.ID}
                county={school.County}
                name={school.Name}
                students={school.Students}
                grades={school.Grades}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
