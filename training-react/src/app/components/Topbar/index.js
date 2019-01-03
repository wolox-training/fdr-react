import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LocalStoreService from '../../../services/LocalStoreService';

import TopbarDetails from './layout';

const USER_SESSION = 'USER_SESSION';

class Topbar extends Component {
  logout = () => {
    const { history } = this.props;
    localStorage.removeItem(USER_SESSION);
    window.alert(`User logout succesfully`); // eslint-disable-line no-alert
    history.push('/');
  };

  render() {
    const user = LocalStoreService.getItem(USER_SESSION);
    return <TopbarDetails user={user} logout={this.logout} />;
  }
}

Topbar.propTypes = {
  history: PropTypes.shape()
};

export default Topbar;
