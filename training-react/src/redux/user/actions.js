import { completeTypes, createTypes } from 'redux-recompose';

import UserService from '../../services/UserService';

export const actions = createTypes(completeTypes(['GET_USER', 'SET_USER']), '@USER');

const actionCreators = {
  getUser: values => ({
    type: actions.GET_USER,
    target: 'user',
    service: UserService.getUser,
    payload: values
  }),
  setUser: values => ({
    type: actions.SET_USER,
    target: 'user',
    service: UserService.setUser,
    payload: values
  })
};

export default actionCreators;
