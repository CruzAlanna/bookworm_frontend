import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const API_URL = 'http://localhost:3000'; // might have to update this to add /users or get rid of completely

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const login = (userData, token) => {
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setAuth(userData);
  };


  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setAuth(null);
  };


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      axios.get(`${API_URL}/me`)
        .then(response => {
          setAuth(response.data); 
        })
        .catch(() => {
          console.error("Token validation failed during initial check.");
          logout();
        });
    }
    
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;