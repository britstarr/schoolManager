import React from 'react';
import Edit from './Edit.js';

const Row = ({ id, county, name, students, grades }) => {
  return (
    <tr key={id}>
      <td data-label="County">{county}</td>
      <td data-label="Name">{name}</td>
      <td data-label="Students">{students}</td>
      <td data-label="Grades">{grades}</td>
      <td>
        <Link to={{
          pathname: '/edit',
          state: {
            school: id
          }
        }}>
          Edit
        </Link>
      </td>
      <td>
        <Link to={{

        }}>
          Delete
        </Link>
      </td>
    </tr>
  )
};

export default Row;
