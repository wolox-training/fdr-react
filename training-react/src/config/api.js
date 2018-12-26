import { create } from 'apisauce';

const api = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000
});

api.setHeader('Authorization', 'tok3nr34t');

export default api;
