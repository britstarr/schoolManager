import React, {Component} from 'react';
import data from '../../data/schools.json';
import Row from './Row.js';
import { Button } from 'react-bootstrap';
import { Link, FormControl } from 'react-router';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      schools: [], //all schools
      search: '',
      filteredSchools: [] //those matching search
    }
  }

  componentDidMount() {
    //on load schools & filteredSchools are both the full list
    this.setState({
      schools: data,
      filteredSchools: data
    });
  }

  handleChange(property, input) {
    //if value in the search bar, update state & filter
    input.target.value ?
      this.setState({
        [property]: input.target.value
      }, () => {
        this.filterSchools();
      }) : //else, search is empty, display the full list
        this.setState({
          filteredSchools: this.state.schools
        });
  }

  filterSchools() {
    //when called, filter the schools based on the search state
    let filteredSchools = [];
    let search = this.state.search;

    this.state.schools.forEach((school) => {
        for (var key in school) {
          if (school[key].toString().toLowerCase().indexOf(search) >= 0) {
            filteredSchools.push(school);
          }
        }
      }
    );

    this.setState({
      filteredSchools: filteredSchools
    });
  }

  render() {
    return (
      <div>
        <div className="admin">
          <Link to="/create" className="create">Add New School</Link>
          <input className="search" type="text" placeholder="Search" onChange={this.handleChange.bind(this, 'search')}/>
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
            {this.state.filteredSchools.map((school, i) => (
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
