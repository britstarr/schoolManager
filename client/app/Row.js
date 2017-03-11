import React from 'react';
import Edit from './Edit.js';
import { Link } from 'react-router';

const Row = ({ index, id, county, name, students, grades }) => {
  return (
    <tr key={index}>
      <td data-label="ID">{id}</td>
      <td data-label="County">{county}</td>
      <td data-label="Name">{name}</td>
      <td data-label="Students">{students}</td>
      <td data-label="Grades">{grades}</td>
      <td>
        <Link to={{
          pathname: '/edit',
          state: {
            index: index,
            id: id,
            county: county,
            name: name,
            students: students,
            grades: grades
          }
        }}>
          Edit
        </Link>
      </td>
      <td>
        <Link to={{
          pathname: '/delete',
          state: {
            index: index,
            name: name
          }
        }}>
          Delete
        </Link>
      </td>
    </tr>
  )
};

export default Row;
