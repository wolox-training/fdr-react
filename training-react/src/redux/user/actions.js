import { completeTypes, createTypes, withPostSuccess } from 'redux-recompose';

import UserService from '../../services/UserService';

export const actions = createTypes(completeTypes(['GET_USER', 'SET_USER']), '@USER');
const USER_SESSION = 'USER_SESSION';

const actionCreators = {
  getUser: values => ({
    type: actions.GET_USER,
    target: 'user',
    service: UserService.getUser,
    payload: values,
    injections: [
      withPostSuccess((dispatch, response) => {
        const user = response.data[0];
        localStorage.setItem(USER_SESSION, JSON.stringify(user));
      })
    ]
  }),
  setUser: values => ({
    type: actions.SET_USER,
    target: 'user',
    service: UserService.setUser,
    payload: values,
    injections: [
      withPostSuccess((dispatch, response) => {
        const user = response.data;
        localStorage.setItem(USER_SESSION, JSON.stringify(user));
      })
    ]
  })
};

export default actionCreators;
