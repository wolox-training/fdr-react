import api from '../config/api';

export default {
  getUserById: id => api.get('/user', { id }),
  getUser: values => api.get(`/user?email=${values.email}&password=${values.password}`)
};
