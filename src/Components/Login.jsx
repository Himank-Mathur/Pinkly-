import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // this command is used to get the data from local storage
  const handleLogin = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      alert('Login successful!');
      navigate('/home');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className=''>

      <div className="flex items-center justify-center h-screen bg-[url('https://cdn.myportfolio.com/a7dcc6d5ac1134b2d40ac6d1c5552304/1f0a0456-b934-4f28-beee-c47de7308667_rw_1920.gif?h=5ecc8b473e70030b5e3d8b8ef826ca1c')] bg-cover">
        <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl mb-4">Login</h2>
          {error && <p className="text-red-500">{error}</p>}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Login
          </button>
          <button
            type="button"
            className="text-blue-500 hover:underline ml-4"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;