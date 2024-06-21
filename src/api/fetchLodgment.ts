import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// 기본 URL
const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchLodgment = async () => {
  try {
    const response = await apiClient.get('/api/lodgment');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchLodgmentById = async (id: string) => {
  try {
    const response = await apiClient.get(`/api/lodgment/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
