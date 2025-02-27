import React, { useState } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [token, setToken] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(''); // Clear any previous error

    try {
      // POST request to backend login endpoint
      const response = await axios.post('/api/auth/login', {
        username,
        password,
      });

      // Assuming the backend response includes a token
      const { token } = response.data;

      // Save the token in state and/or localStorage
      setToken(token);
      localStorage.setItem('token', token);
    } catch (err: any) {
      console.error(err);
      // Depending on the error structure, adjust your error message handling
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="page-container">
      <h2 className="oldschool-text">Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="oldschool-text" htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ fontFamily: 'monospace', padding: '0.5rem', margin: '0.5rem 0' }}
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
            style={{ fontFamily: 'monospace', padding: '0.5rem', margin: '0.5rem 0' }}
            required
          />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
      {error && <p className="oldschool-text" style={{ color: 'red' }}>{error}</p>}
      {token && <p className="oldschool-text">Logged in successfully!</p>}
    </div>
  );
};

export default Login;
