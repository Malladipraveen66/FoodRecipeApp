import React, { useState } from "react";
import "./Form.css";
import UserTable from "./UserTable";
import SearchAndFilter from "./SearchAndFilter";
import { Navigate, useNavigate } from "react-router-dom";


const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [fieldError, setFieldError] = useState("");
  const navigate = useNavigate();
  //   const handleLogin = () => {
  //     // Your login logic here
  //     // For simplicity, let's just check if username and password are not empty
  //     if (username && password) {
  //       setIsLoggedIn(true);
  //     }
  //   };

  //   const handleLogout = () => {
  //     setIsLoggedIn(false);
  //     setUsername("");
  //     setPassword("");
  // //   };

  const backToLogin = () => {
    navigate('/');
  }

  const resetFieldError = () => {
    setTimeout(() => {
        setFieldError("");
      }, 5000);
  }

  const handleRegister = () => {
    if (!email.trim() || !password.trim() || !mobileNumber.trim()) {
      setFieldError("All fields are required");
      resetFieldError();
    }
    else if (email && password && mobileNumber) {
      if (!/\S+@\S+\.\S+/.test(email)) {
        setFieldError("Please Enter Valid Email");
        resetFieldError();
      }
      else if (password.length < 5) {
        setFieldError("Password length should not less than 5 letters");
        resetFieldError();
      }
      else if (!/^\d{10}$/.test(mobileNumber)) {
        setFieldError("Please enter valid mobile number");
        resetFieldError();
      }
      else{
        navigate('/')
      }
    }
    // Your registration logic here
    // For simplicity, let's assume it's handled in a similar way as login
    // if (username && password) {
    //   setIsLoggedIn(true);
    // }
  };

  return (
    <div className="form-container">
      <div className="login-register-form">
        {fieldError && (
          <div className="text-center text-danger" style={{ color: "red" }}>
            {fieldError}
          </div>
        )}
        <h2>Register</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"

        />

        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobileNumber}
          required
          onChange={(e) => setMobileNumber(e.target.value)}
          autoComplete="off"
          maxLength={10}
        />

        <button type="button" className="form-control" onClick={handleRegister}>Register</button><br />
        <button type="button" className="form-control" onClick={backToLogin}>Back to Login</button>

      </div>
    </div>
  );
};

export default Form;
