import axios from 'axios';

// Dynamically choose API base URL
const API = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? '/api' // ✅ Works on Vercel (same domain)
      : 'https://portfolio-backend-sage-rho.vercel.app/api/', // ✅ Works locally
});

// API endpoints
export const fetchProjects = () => API.get('/projects');
export const fetchProject = (id) => API.get(`/projects/${id}`);
export const submitContact = (formData) => API.post('/contact', formData);
