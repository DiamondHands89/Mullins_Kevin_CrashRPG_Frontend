import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    // Simple validation: ensure password and confirmation match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // POST the registration info to the backend
      const response = await axios.post('/api/auth/register', {
        username,
        password,
      });

      // Expect your backend to return a token upon successful registration
      const { token } = response.data;
      localStorage.setItem('token', token);
      setSuccessMessage('Registration successful! You are now logged in.');
    } catch (err: any) {
      console.error('Registration error:', err);
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="page-container">
      <h2 className="oldschool-text">Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="oldschool-text" htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="oldschool-text" htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="oldschool-text" htmlFor="confirmPassword">Confirm Password:</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">Register</button>
      </form>
      {error && <p className="oldschool-text" style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p className="oldschool-text" style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default RegisterPage;