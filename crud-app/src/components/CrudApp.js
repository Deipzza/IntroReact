"use client";

import React, { useState } from 'react';

import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDB = [
  {
    id: 1,
    name: "Kaladin Stormblessed",
    order: "Windrunner",
  },
  {
    id: 2,
    name: "Dalinar Kholin",
    order: "Bondsmith",
  },
  {
    id: 3,
    name: "Shallan Davar",
    order: "Lightweaver",
  },
  {
    id: 4,
    name: "Renarin Kholin",
    order: "Truthwatcher",
  },
  {
    id: 5,
    name: "Szeth son-son-Vallano",
    order: "Skybreaker",
  },
  {
    id: 6,
    name: "Jasnah Kholin",
    order: "Elsecaller",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDB);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  }

  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el);
    setDb(newData);
  }

  const deleteData = (id) => {
    let isDelete = confirm("¿Estás seguro de que deseas eliminar el registro?");

    if(isDelete) {
      let newData = db.filter(el => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  }

  return (
    <div>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          />
        <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
      </article>
    </div>
  );
}
 
export default CrudApp;