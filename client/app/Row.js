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
        <button onClick={function(){
          return (
            <Edit id={id} county={county} name={name} students={students} grades={grades} />
          )
        }}> Edit
        </button>
      </td>
      <td>
        <button onClick={function(){
          return (
            <Edit id={id} county={county} name={name} students={students} grades={grades} />
          )
        }}> Delete
        </button>
      </td>
    </tr>
  )
};

export default Row;
