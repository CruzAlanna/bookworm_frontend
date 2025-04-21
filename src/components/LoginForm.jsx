import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const API_URL = 'http://localhost:3000';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/about";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/login`, { email, password })
      .then(response => {
        const { jwt: token, user } = response.data;
        if (token && user) {
          login(user, token);
          navigate(from, { replace: true });
        } else {
          console.error('Login Response Issue:', response.data);
          alert('Login failed: Unexpected response from server.');
        }
      })
      .catch(error => {
        console.error('Login error:', error.response || error);
        alert('Login failed. Check credentials or console.');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div><label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label></div>
        <br></br>
        <div><label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label></div>
        <br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginForm;