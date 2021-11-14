import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

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
    searchJokes();
  }

  const searchJokes = async() => {
    try {
      const jokes = await axios.get(`https://api.chucknorris.io/jokes/search?query=${form.search}`);
      console.log(jokes.data);
    } catch (err) {
      console.error(err);
    }

  }

  return (
    <div className="App">
      <form>
        <label htmlFor='search'>Search</label>Î
        <input 
        id='search' 
        type="text" 
        name='search' 
        value={form.search}
        placeholder="Search" 
        onChange={changeHandler} />
        <button type='submit' onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
}

export default App;
