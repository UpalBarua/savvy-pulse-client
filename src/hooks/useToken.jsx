import { useState, useEffect } from 'react';
import axios from 'axios';

const useToken = (email) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/jwt?email=${email}`
        );

        console.log(response);

        if (response.data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken);
          setToken(data.accessToken);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (email) {
      fetchToken();
    }
  }, [email]);

  return { token };
};

export default useToken;
