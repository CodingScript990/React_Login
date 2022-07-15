// Main.js
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './api/Header';
import Register from './api/Register';
import Home from './api/Home';
import Login from './api/Login';
import { useEffect, useState } from 'react';

function App() {

  const [isLogin, setIsLogin] = useState(false);

  
  useEffect(() => {
    if(sessionStorage.getItem('username') === null) {
      console.log('로그인 실패!', isLogin);
    } else {
      setIsLogin(true);
      console.log('로그인 성공!', isLogin);
    }
  }, []);

  return (
    // Container
    <BrowserRouter className="App">
      <Header />
      {
        isLogin ? 
        <Routes>
          <Route isLogin={isLogin} path='/' element={<Home />} />
        </Routes> 
        :
        <Routes>
          <Route isLogin={isLogin} path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes> 
      }

    </BrowserRouter>
  );
}

export default App;
