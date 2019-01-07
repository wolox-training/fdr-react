import React from 'react';
import { Route } from 'react-router-dom';

import LocalStoreService from '../../../services/LocalStoreService';
import LoginForm from '../../screens/Login';

const USER_SESSION = 'USER_SESSION';

export const PrivateRoute = ({ component: Component, isTopBar, ...rest }) => {
  const user = LocalStoreService.getItem(USER_SESSION);
  return (
    <Route
      {...rest}
      render={props => (user && user !== 'undefined' ? <Component {...props} /> : <LoginForm {...props} />)}
    />
  );
};
