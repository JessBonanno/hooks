import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './components/searchForm';


const App = () => {
  const [form, setForm] = useState({
    search: '',
  });
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
      <section>
        {jokes.length ? jokes.map(joke => {
          return (
            <p key={joke.id}>{joke.value}</p>
          )
        }) :
          <p>{initialJoke.value}</p>
        }
      </section>
    </div>
  );
}

export default App;
