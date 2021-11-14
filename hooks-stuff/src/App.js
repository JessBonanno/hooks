import './App.css';
import React, { useState } from 'react';

const initialForm = {
  search: '',
};

const App = () => {
  const [form, setForm] = useState(initialForm);


  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form)
  }

  return (
    <div className="App">
      <fom>
        <label htmlFor='search'>Search</label>Î
        <input 
        id='search' 
        type="text" 
        name='search' 
        placeholder="Search" 
        onChange={changeHandler} />
        <button type='submit' onClick={submitHandler}>Submit</button>
      </fom>
    </div>
  );
}

export default App;
