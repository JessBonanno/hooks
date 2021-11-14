import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './components/searchForm';
import UserForm from './components/userForm';


const App = () => {
  const [form, setForm] = useState({
    search: '',
  });
  // eslint-disable-next-line no-unused-vars
  const [jokes, setJokes] = useState([]);
  const [initialJoke, setInitialJoke] = useState('');


  const getRandom = async () => {
    try {
      const random = await axios.get('https://api.chucknorris.io/jokes/random');
      setInitialJoke(random.data);
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getRandom();
  }, []);


  return (
    <div className="App">
      <SearchForm
        form={form}
        setForm={setForm}
        setJokes={setJokes}
        initialJoke={initialJoke} />
        <UserForm/>
    </div>
  );
}

export default App;
