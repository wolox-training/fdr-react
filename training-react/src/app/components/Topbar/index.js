import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { logout } from '../../../helpers/auth';
import LocalStoreService from '../../../services/LocalStoreService';

import styles from './styles.scss';

const USER_SESSION = 'USER_SESSION';

class Topbar extends Component {
  render() {
    const user = LocalStoreService.getItem(USER_SESSION);
    return (
      <div className={styles.topbar}>
        <h2 className={styles.gameTitle}>
          <Link to="/game">Tic Tac Toe</Link>
        </h2>
        <div className={styles.login}>
          {user !== 'undefined' && (
            <div className={styles.loginInfo}>
              <i className="far fa-user-circle" />
              <h5 className={styles.user}>
                <Link to={`/user/${user.id}`}>{JSON.parse(user).username}</Link>
              </h5>
              <button className={styles.buttonLogout} onClick={() => logout(this.props)}>
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
  userSession: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string
  })
};

export default Topbar;
