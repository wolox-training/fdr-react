import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class UserInfo extends Component {
  render() {
    const { userSession } = this.props;
    return (
      <div className={styles.desc}>
        <h4 className={styles.generalInfo}>General Information</h4>
        <h5>
          <i className="far fa-user" /> Gender: {userSession.gender}
        </h5>
        <h5>
          <i className="fas fa-globe-americas" /> Country: {userSession.country}
        </h5>
        <h5>
          <i className="fas fa-envelope" /> Mail: {userSession.mail}
        </h5>
      </div>
    );
  }
}

UserInfo.propTypes = {
  userSession: PropTypes.shape({
    id: PropTypes.number,
    mail: PropTypes.string,
    password: PropTypes.string,
    username: PropTypes.string,
    fullname: PropTypes.string,
    gender: PropTypes.string,
    country: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default UserInfo;
