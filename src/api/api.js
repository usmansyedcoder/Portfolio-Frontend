// client/src/api/api.js
import axios from 'axios';

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'https://portfolio-backend-six-dusky.vercel.app',
});

// Request interceptor for logging
API.interceptors.request.use(
  (config) => {
    console.log(`🔄 API Call: ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
API.interceptors.response.use(
  (response) => {
    console.log('✅ API Success:', response.status);
    return response;
  },
  (error) => {
    console.error('❌ API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// API endpoints
export const fetchProjects = () => API.get('/api/projects');
export const submitContact = (formData) => API.post('/api/contact', formData);

// Health check endpoint
export const checkHealth = () => API.get('/health');