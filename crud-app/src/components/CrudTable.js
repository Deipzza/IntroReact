import React from 'react';

import CrudTableRow from './CrudTableRow';

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Tabla de datos</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Order</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((element) => 
              <CrudTableRow
                key={element.id}
                el={element}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            )
          ) : (
            <tr>
              <td colSpan="3">Sin datos :(</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
 
export default CrudTable;