import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';

function App() {

  const [loginState, setLoginState] = useState(false);
  const [username, setUsername] = useState('');

  const Login = () => {
    setLoginState(true);
  }

  const LogOut = () => {
    setLoginState(false);
  }

  const SetName = (name) => {
    setUsername(name);
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path = '/recommender-system' element = { <LoginPage loginState={ loginState } Login={ Login } username = { username } SetName={ SetName } /> }/>
          <Route path = '/recommender-system/main' element = { <MainPage loginState={ loginState } LogOut={ LogOut } username = { username } /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
