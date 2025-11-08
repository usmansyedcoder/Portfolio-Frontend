import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const fetchProjects = () => API.get('/projects');
export const fetchProject = (id) => API.get(`/projects/${id}`);
export const submitContact = (formData) => API.post('/contact', formData);
