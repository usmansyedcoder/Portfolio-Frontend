import axios from 'axios';

// ✅ FIXED - Use absolute URLs
const API = axios.create({
  baseURL: 'https://portfolio-backend-sage-rho.vercel.app/api/',
});

// API endpoints
export const fetchProjects = () => API.get('/projects');
export const submitContact = (formData) => API.post('/contact', formData);