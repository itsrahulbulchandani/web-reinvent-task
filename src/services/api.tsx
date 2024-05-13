import axios from 'axios';

const API = axios.create({
  baseURL: 'https://reqres.in/api',
});

export const fetchUsers = () => API.get('/users');
export const loginUser = (email: string, password: string) => API.post('/login', { email, password });
export const registerUser = (email: string, password: string) => API.post('/register', { email, password });

export default API;
