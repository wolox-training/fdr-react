import api from '../config/api';

export const STATUS_OK = 200;
export const STATUS_NOT_FOUND = 403;

export default {
  getUser: async values => {
    let url;
    if (values.email && values.password) {
      url = `/user?email=${values.email}&password=${values.password}`;
    } else {
      url = `/user?id=${values.id}`;
    }
    return api.get(url);
  },
  setUser: async values => {
    const { id, ...data } = values;
    return api.put(`/user/${id}`, data);
  }
};
