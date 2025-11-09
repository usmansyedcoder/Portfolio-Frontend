// client/src/api/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://portfolio-backend-xi-bice.vercel.app/api',
});

// Request interceptor
API.interceptors.request.use(
  (config) => {
    console.log('🚀 Making API request to:', config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
API.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', response.data);
    return response;
  },
  (error) => {
    console.error('❌ API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// API endpoints
export const fetchProjects = () => API.get('/projects');
export const submitContact = (formData) => API.post('/contact/send', formData);

export default API;