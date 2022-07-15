import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Login from './Login';

function Header(props) {

  const isLogin = props.isLogin;

  // 로그인 성공시 로그아웃 버튼이 보여지고 로그아웃 이벤트 발생
  const onLogout = () => {
    sessionStorage.removeItem('username');
    document.location.href = '/';
  };

  return (
    <header className='header'>
        <div className='header__container'>
          <div className='header__home'>
            <Link to='/'>시큐어 포인트</Link>
          </div>
          <nav className='nav'>
            <ul className='nav__items'>
              <li className='nav__item user__name'>userName</li>
              <li className='nav__item btn'>
                {
                  isLogin ?
                    <button type='button' isLogin={isLogin} onClick={onLogout}>Logout</button>
                    : <Link to='login'>Login</Link>
                }
              </li>
            </ul>
          </nav>
        </div>
    </header>
  )
};

export default Header;