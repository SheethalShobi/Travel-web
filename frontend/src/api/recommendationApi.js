import axios from 'axios';
const BASE_URL = "http://localhost:5005";

export const getRecommendation = (query) => axios.post(`${BASE_URL}/recommendation`, { query });
