import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', //SET THE BASE URL
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default api;
