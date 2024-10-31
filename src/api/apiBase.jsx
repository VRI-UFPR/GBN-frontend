import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://webdokumente.c3sl.ufpr.br/api',
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
export default apiClient;
