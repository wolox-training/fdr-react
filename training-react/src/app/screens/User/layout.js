import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import withLoadingScreen from '../../components/Loading';

import UserInfo from './components/UserInfo';
import UserEdit from './components/UserEdit';
import styles from './styles.scss';

function UserDetails({ user, isSettingUser, editUser, setUser }) {
  return (
    <div className={styles.user}>
      <div className={styles.titleUser}>
        <h3>
          <i className="far fa-user-circle" /> User Profile
        </h3>
      </div>
      <div className={styles.userContainer}>
        <div className={styles.profile}>
          <img className={styles.image} src={user.imageUrl} alt="User" />
          <h4 className={styles.name}>{user.fullname}</h4>
          <h5 className={styles.username}>
            <i className="fab fa-slack" /> {user.username}
          </h5>
          <button className={styles.btn} onClick={editUser}>
            Editar perfil
          </button>
        </div>
        {isSettingUser ? (
          <UserEdit userSession={user} setUser={setUser} editUser={editUser} />
        ) : (
          <UserInfo userSession={user} />
        )}
      </div>
      <div className={styles.btnBack}>
        <Link to={`/game`}>
          <button className={styles.btn}>Back</button>
        </Link>
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  editUser: PropTypes.func,
  setUser: PropTypes.func,
  isSettingUser: PropTypes.bool,
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

export default withLoadingScreen(UserDetails);
