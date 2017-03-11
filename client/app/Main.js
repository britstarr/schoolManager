import React, {Component} from 'react';
import data from '../../data/schools.json';
import Row from './Row.js';

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

  render() {
    return (
      <div>
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
