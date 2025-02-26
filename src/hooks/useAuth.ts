// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data if authenticated
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get('/api/user', { headers: { Authorization: `Bearer ${token}` } });
        setUser(response.data);
      }
    };
    fetchUser();
  }, []);

  return { user, setUser };
};

export default useAuth;
