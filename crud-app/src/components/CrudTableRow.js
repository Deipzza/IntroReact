import React from 'react';

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let {id, name, order} = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{order}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
}
 
export default CrudTableRow;