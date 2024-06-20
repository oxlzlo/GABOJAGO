import axios from 'axios';

export const fetchLodgment = async () => {
  try {
    const response = await axios.get('/api/lodgment');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchLodgmentById = async (id: any) => {
  try {
    const response = await axios.get(`/api/lodgment/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
