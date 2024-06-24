import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://ec2-43-203-40-90.ap-northeast-2.compute.amazonaws.com',
});

export const fetchAccommodation = async () => {
  return instance.get('/open-api/accommodation');
};

export const fetchLodgment = async () => {
  try {
    const response = await axios.get('/api/lodgment');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchLodgmentById = async (id: string) => {
  try {
    const response = await axios.get(`/api/lodgment/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
