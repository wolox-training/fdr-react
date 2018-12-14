import api from '../config/api';

export const STATUS_OK = 200;
export const STATUS_NOT_FOUND = 403;

export default {
  getUser: values => {
    let url;
    if (values.email && values.password) {
      url = `/user?email=${values.email}&password=${values.password}`;
    } else {
      url = `/user?id=${values.id}`;
    }
    return api
      .setHeader('Authorization', 'tok3nr34t')
      .get(url)
      .then(response => {
        if (response && !response.data.length) {
          response.status = STATUS_NOT_FOUND;
          response.problem = 'User not found';
        }
        return response;
      });
  },
  setUser: async values => {
    const { id, data } = values;
    return api
      .setHeader('Authorization', 'tok3nr34t')
      .post(`/users/${id}`, data)
      .then(response => {
        if (response && !response.data.length) {
          response.status = STATUS_NOT_FOUND;
          response.problem = 'User not found';
        }
        return response;
      });
  }
};
