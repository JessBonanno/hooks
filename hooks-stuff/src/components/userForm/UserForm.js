import React, { useState } from 'react'

const UserForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
  });

  const handleChanges = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log('submitted');
    console.log(userInfo)
    setUserInfo({
      name: '',
      password: '',
      email: '',
      phone: '',
    })
  }


  return (
    <form onSubmit={submitForm}>
      <input
        onChange={handleChanges}
        name='name'
        type='text'
        value={userInfo.name}
        placeholder='Name' />
      <input
        onChange={handleChanges}
        name='password'
        type='password'
        value={userInfo.password}
        placeholder='Password' />
      <input
        onChange={handleChanges}
        name='email'
        type='email'
        value={userInfo.email}
        placeholder='Email' />
      <input
        onChange={handleChanges}
        name='phone'
        type='phone'
        value={userInfo.phone}
        placeholder='Phone' />
      <button type='submit'>Submit User Info</button>
    </form>
  )
}

export default UserForm
