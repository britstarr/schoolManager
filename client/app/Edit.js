import React, {Component} from 'react';
import { FormGroup, FormControl, Button} from 'react-bootstrap';

export default class Edit extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      county: '',
      students: '',
      grades: ''
    }
  }

  componentDidMount() {
    console.log("propsssss", this.props)
  }

  render() {
    return (
      <div>
        <form>
          <FormGroup
            controlId="addSchool"
          >
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              value={this.state.name}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <ControlLabel>County</ControlLabel>
            <FormControl
              type="text"
              value={this.state.county}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <ControlLabel>Students</ControlLabel>
            <FormControl
              type="text"
              value={this.state.students}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <ControlLabel>Grades</ControlLabel>
            <FormControl
              type="text"
              value={this.state.grades}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button>Update</Button>
        </form>
      </div>
    )
  }
}

// const Edit = ({ id, county, name, students, grades }) => {
  // console.log(id, county, name)
  // return (
  //   <div>
  //     {name}
  //   </div>
  // )
// };

// export default Edit;
