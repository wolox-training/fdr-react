import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { logout } from '../../../helpers/auth';
import LocalStoreService from '../../../services/LocalStoreService';

import styles from './styles.scss';

const USER_SESSION = 'USER_SESSION';

class Topbar extends Component {
  render() {
    const user = JSON.parse(LocalStoreService.getItem(USER_SESSION));
    console.log(user);

    return (
      <div className={styles.topbar}>
        <h2 className={styles.gameTitle}>Tic Tac Toe</h2>
        <div className={styles.login}>
          {user && user && (
            <div className={styles.loginInfo}>
              <i className="far fa-user-circle" />
              <h5 className={styles.user}>
                <Link to={`/user/${user.id}`}>{user.username}</Link>
              </h5>
              <button className={styles.buttonLogout} onClick={logout}>
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
  })
};

export default Topbar;
