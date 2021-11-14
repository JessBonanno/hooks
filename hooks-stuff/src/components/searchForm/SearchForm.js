import axios from 'axios';
import React from 'react'

const SearchForm = ({setForm, form, setJokes}) => {

  const changeHandler = (e) => {
    setForm({
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    searchJokes();
    setForm({
      search: ''
    });
  };

  const searchJokes = async () => {
    try {
      const jokes = await axios.get(`https://api.chucknorris.io/jokes/search?query=${form.search}`);
      setJokes(jokes.data.result)
    } catch (err) {
      console.error(err);
    }
  }


  return (
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

  )
}

export default SearchForm;
