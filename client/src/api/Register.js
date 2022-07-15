import React, { useState, useEffect } from 'react';
import {
    Link
  } from 'react-router-dom';
import axios from 'axios';

function Register() {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    const register = () => {
        axios.post('http://localhost:3001/register', { // register api
        username: usernameReg,
        password: passwordReg,
        }).then( (res) => {
          if(res.data.message) {
            setLoginStatus(res.data.message);
            document.location.href = '/';
          }
        });
    };

  return (
    <div className='register_container'>
        <h1 className='register__title'>AI 모니터링</h1>
        <h2 className='login__msg'>{loginStatus}</h2>
      {/* Main Form */}
      <div className='frm'>
        <label className='Uid_label'>ID</label>
        <input type='text' name='uid' onChange={(e) => { setUsernameReg(e.target.value) }} />
        <label className='Upw_label'>Password</label>
        <input type='password' name='upw' onChange={(e) => { setPasswordReg(e.target.value) }} />

        {/* Main Form Button */}
        <button onClick={register}>Submit</button>
      </div>
    </div>
  )
};

export default Register;