import React from 'react';
import { Route } from 'react-router-dom';

import LocalStoreService from '../../../services/LocalStoreService';
import LoginForm from '../LoginForm';

const USER_SESSION = 'USER_SESSION';

export const PrivateRoute = ({ component: Component, isTopBar, ...rest }) => {
  const user = JSON.parse(LocalStoreService.getItem(USER_SESSION));
  return <Route {...rest} render={props => (user ? <Component {...props} /> : <LoginForm {...props} />)} />;
};
