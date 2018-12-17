import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class UserInfo extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className={styles.desc}>
        <h4 className={styles.generalInfo}>General Information</h4>
        <h5>
          <i className="far fa-user" /> Gender: {user.gender}
        </h5>
        <h5>
          <i className="fas fa-globe-americas" /> Country: {user.country}
        </h5>
        <h5>
          <i className="fas fa-envelope" /> Mail: {user.mail}
        </h5>
      </div>
    );
  }
}

UserInfo.propTypes = {
  user: PropTypes.shape({
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
