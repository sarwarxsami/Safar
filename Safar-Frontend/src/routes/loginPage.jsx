//done
import React, { useState } from 'react';
import Login from '../components/Login';
import Header from '../components/Header';

const LoginPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <div>
        {/* <center><Header /></center> */}
        <Login setAuth={handleAuthentication} />
    </div>
  );
}

export default LoginPage;

// const token = localStorage.getItem("access_token");

// const response = await fetch("http://13.234.186.159:3000/some/protected/route", {
//   method: 'GET', // or POST, etc.
//   headers: {
//     "Authorization": `Bearer ${token}`,
//     "Content-Type": "application/json"
//   }
// });
