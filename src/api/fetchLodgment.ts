import axios from 'axios';

export const getLodgment = async () => {
  const response = await axios.get('/api/lodgment');
  return response.data;
};
