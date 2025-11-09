// client/src/api/api.js
import axios from 'axios';

// ✅ CORRECTED - Remove trailing slash and use correct base URL
const API = axios.create({
  baseURL: 'https://portfolio-backend-six-dusky.vercel.app/api',
  timeout: 10000,
});

// Add request interceptor for debugging
API.interceptors.request.use(
  (config) => {
    console.log('🚀 Making API request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('❌ Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
API.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('❌ API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// API endpoints
export const fetchProjects = () => API.get('/projects');
export const submitContact = (formData) => API.post('/contact', formData);

export default API;