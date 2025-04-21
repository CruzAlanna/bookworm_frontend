import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:3000';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', password_confirmation: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/signup`, formData)
      .then(response => {
        console.log('Signup successful:', response.data);
        alert("Signup successful! Please log in.");
        navigate('/login');
      })
      .catch(error => {
        console.error('Signup error:', error.response || error);
        alert('Signup failed. Please check console for errors.');
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
         <div><label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required /></label></div>
         <br></br>
         <div><label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} required /></label></div>
         <br></br>
         <div><label>Password: <input type="password" name="password" value={formData.password} onChange={handleChange} required /></label></div>
         <br></br>
         <div><label>Confirm Password: <input type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} required /></label></div>
         <br></br>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default SignupForm;