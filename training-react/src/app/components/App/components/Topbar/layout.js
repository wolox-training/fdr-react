import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

function TopbarDetails({ user, logout }) {
  return (
    <div className={styles.topbar}>
      <h2 className={styles.gameTitle}>
        <Link to="/game">Tic Tac Toe</Link>
      </h2>
      <div className={styles.login}>
        {user && user !== 'undefined' && (
          <div className={styles.loginInfo}>
            <i className="far fa-user-circle" />
            <h5 className={styles.user}>
              <Link to={`/user/${JSON.parse(user).id}`}>{JSON.parse(user).username}</Link>
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

TopbarDetails.propTypes = {
  user: PropTypes.string,
  logout: PropTypes.func
};

export default TopbarDetails;
