import React, { useState } from 'react';
import axios from 'axios';
import './components/Login.css'; // Pastikan untuk membuat file ini untuk custom CSS jika diperlukan

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      if (response.data.success) {
        window.location.href = '/home';
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="login-form p-4 rounded shadow-sm">
        <h1 className="login-title mb-4">Login To Ready Top Up</h1>
        <div className="form-group mb-3 inputbox">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3 inputbox">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
