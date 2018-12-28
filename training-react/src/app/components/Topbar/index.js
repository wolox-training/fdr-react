import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LocalStoreService from '../../../services/LocalStoreService';

import styles from './styles.scss';

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
    return (
      <div className={styles.topbar}>
        <h2 className={styles.gameTitle}>Tic Tac Toe</h2>
        <div className={styles.login}>
          {user && user !== 'undefined' && (
            <div className={styles.loginInfo}>
              <i className="far fa-user-circle" />
              <h5 className={styles.user}>
                <Link to={`/user/${JSON.parse(user).id}`}>{JSON.parse(user).username}</Link>
              </h5>
              <button className={styles.buttonLogout} onClick={this.logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Topbar.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string
  }),
  history: PropTypes.shape()
};

export default Topbar;
