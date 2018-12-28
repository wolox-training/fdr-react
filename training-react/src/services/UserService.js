import api from '../config/api';

export const STATUS_OK = 200;
export const STATUS_NOT_FOUND = 403;

export default {
  getUserById: id => api.get('/user', { id }),
  getUser: values =>
    api.get(`/user?email=${values.email}&password=${values.password}`).then(response => {
      if (response && !response.data.length) {
        response.status = STATUS_NOT_FOUND;
        response.problem = 'User not found';
      }
      return response;
    }),
  setUser: async values => {
    const { id, ...data } = values;
    return api.put(`/user/${id}`, data).then(response => {
      if (!response && !response.data.length) {
        response.status = STATUS_NOT_FOUND;
        response.problem = 'User not found';
      }
      return response;
    });
  }
};
