import React, { Component } from 'react';

import { logout } from '../../../helpers/auth';

import styles from './styles.scss';

class Topbar extends Component {
  render() {
    return (
      <div className={styles.topbar}>
        <h2 className={styles.gameTitle}>Tic Tac Toe</h2>
        <div className={styles.login}>
          <i className="far fa-user-circle" />
          <h5 className={styles.user}>{JSON.parse(this.props.user)}</h5>
          <button className={styles.buttonLogout} onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default Topbar;
