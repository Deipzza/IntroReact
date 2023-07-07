"use client";

import React, { useState, useEffect } from 'react';

const initialForm = {
  id: null,
  name: "",
  order: "",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if(dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!form.name || !form.order) {
      alert("Datos incompletos");
      return;
    }
    
    if(form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  }

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  }

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="order"
          value={form.order}
          placeholder="Order"
          onChange={handleChange}
        />
        <input type="submit" value="Send" />
        <input type="reset" value="Clear" onClick={handleReset} />
      </form>
    </div>
  );
}
 
export default CrudForm;