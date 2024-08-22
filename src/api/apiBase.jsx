import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    withCredentials: false,
    acessControlAllowOrigin: '*',
    accessControlAllowMethods: 'GET,PUT,POST,DELETE',
    accessControlAllowHeaders: "Content-Type, Authorization, X-Requested-With",
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
export default apiClient;