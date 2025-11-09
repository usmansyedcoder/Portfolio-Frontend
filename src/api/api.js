// client/src/api/api.js
import axios from 'axios';

// Use environment variable or fallback to your deployed backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://portfolio-backend-xi-bice.vercel.app';

const API = axios.create({
  baseURL: API_BASE_URL,
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

// API endpoints - CORRECTED based on your backend response
export const fetchProjects = () => API.get('/api/projects');
export const submitContact = (formData) => API.post('/ppl/contact', formData);

export default API;