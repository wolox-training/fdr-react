import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { logout } from '../../../helpers/auth';

import styles from './styles.scss';

class Topbar extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className={styles.topbar}>
        <h2 className={styles.gameTitle}>Tic Tac Toe</h2>
        <div className={styles.login}>
          <i className="far fa-user-circle" />
          <h5 className={styles.user}>
            <Link to={`/user/${user.id}`}>{user.email}</Link>
          </h5>
          <button className={styles.buttonLogout} onClick={logout}>
            Logout
          </button>
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
