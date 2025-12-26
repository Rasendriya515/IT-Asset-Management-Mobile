import axios from 'axios';

const IP_LAPTOP = '192.168.100.11'; 
const BASE_URL = `http://${IP_LAPTOP}:8000/api/v1`;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default api;