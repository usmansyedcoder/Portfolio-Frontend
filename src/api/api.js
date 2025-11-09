// client/src/api/api.js
import axios from 'axios';

// ✅ UPDATED - Use your new backend URL
const API_BASE_URL = 'https://portfolio-backend-six-dusky.vercel.app';

const API = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 second timeout
});

// Enhanced request interceptor with debugging
API.interceptors.request.use(
  (config) => {
    console.log('🚀 API Request:', {
      url: config.url,
      method: config.method,
      baseURL: config.baseURL
    });
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Enhanced response interceptor
API.interceptors.response.use(
  (response) => {
    console.log('✅ API Response Success:', {
      url: response.config.url,
      status: response.status,
      data: response.data
    });
    return response;
  },
  (error) => {
    console.error('❌ API Response Error:', {
      url: error.config?.url,
      status: error.response?.status,
      message: error.message,
      responseData: error.response?.data
    });
    return Promise.reject(error);
  }
);

// API endpoints - try different variations
export const fetchProjects = () => API.get('/api/projects');
export const fetchProjectsAlt = () => API.get('/projects'); // Alternative endpoint
export const submitContact = (formData) => API.post('/contact', formData);
export const submitContactAlt = (formData) => API.post('/api/contact', formData);

export default API;