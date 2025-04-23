// src/pages/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    collegeName: '',
    collegeId: '',
    profilePic: null,
    collegeCard: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const res = await axios.post('http://localhost:5000/api/register', data);
      alert('Registration successful! Check your email for the password.');
      window.location.href = '/login';
    } catch (err) {
      console.error(err);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <h2>User Registration</h2>
      <form className="register-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
        <input type="text" name="collegeName" placeholder="College Name" required onChange={handleChange} />
        <input type="text" name="collegeId" placeholder="College ID Number" required onChange={handleChange} />
        
        <label>Upload Profile Picture (50KB - 250KB):</label>
        <input type="file" name="profilePic" accept="image/*" required onChange={handleChange} />

        <label>Upload College ID Card (100KB - 500KB):</label>
        <input type="file" name="collegeCard" accept="image/*" required onChange={handleChange} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
 