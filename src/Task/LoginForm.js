import React, { useState } from 'react';
import './Form.css';
import UserTable from './UserTable';
import SearchAndFilter from './SearchAndFilter';
import { Navigate, useNavigate } from "react-router-dom";

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    // Your login logic here
    // For simplicity, let's just check if username and password are not empty
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="form-container">
      {isLoggedIn ?
      <Navigate to="/home" replace={true}/>
        :
        <div className="login-register-form">
          <h2>Login and Register</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required="name"
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleRegister}>Register</button>

        </div>
    }
    </div>
  );
};

export default Form;



