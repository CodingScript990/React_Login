import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';

function Login() {

  //const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // username handler
  const handleInputId = e => {
    setUsername(e.currentTarget.value);
  };

  // password handler
  const handleInputPw = e => {
    setPassword(e.currentTarget.value);
  };

  /*
  const onSubmitHandler = e => {
    e.preventDefault();

    let body = {
      username: username,
      password: password
    };

  };
 */
  const [loginStatus, setLoginStatus] = useState('');

  const login = () => {
      axios.post('http://localhost:3001/login', { // login api
        username: username,
        password: password,
      }).then( (res) => {
        // 에러
        if(res.data.message) {
          setLoginStatus(res.data.message);
        } else {
          // 성공
          setLoginStatus(res.data[0].username + '님 환영합니다!');
          document.location.href = '/';
        }
      });
  };

  /*
  useEffect(() => {
    axios.get('http://localhost:3001/login')
    .then(res => console.log(res))
    .catch()
  }, []);
  */

 // Register Btn Event Hanlder
  const registerBtn = () => {
    document.location.href = '/register';
  };

  return (
    <div className='login_container'>
        <h1 className='login__title'>login</h1>
        <h2 className='login__msg'>{loginStatus}</h2>
      {/* Main Form */}
      <div className='frm'>
        <label className='Uid_label'>ID</label>
        <input type='text' placeholder='ID' value={username} onChange={handleInputId} />
        <label className='Upw_label'>Password</label>
        <input type='password' placeholder='Password' value={password} onChange={handleInputPw} />

        {/* Main Form Button */}
        <button onClick={login}>Login</button>
        <button onClick={registerBtn}>Register</button>
      </div>
    </div>
  )
};

export default Login;