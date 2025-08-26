import axios from 'axios';
const BASE_URL = "http://localhost:5001";

export const registerUser = (data) => axios.post(`${BASE_URL}/register`, data);
export const loginUser = (data) => axios.post(`${BASE_URL}/login`, data);
export const getUserProfile = (id) => axios.get(`${BASE_URL}/profile/${id}`);
