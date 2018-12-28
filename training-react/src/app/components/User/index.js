import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import userActions from '../../../redux/user/actions';
import LocalStoreService from '../../../services/LocalStoreService';
import Loading from '../Loading';
import UserInfo from '../UserInfo';
import UserEdit from '../UserEdit';

import styles from './styles.scss';

const USER_SESSION = 'USER_SESSION';

class User extends Component {
  state = {
    isSettingUser: false
  };

  componentDidMount() {
    const user = JSON.parse(LocalStoreService.getItem(USER_SESSION));
    this.props.getUser(user);
  }

  editUser = () => {
    this.setState(prevState => ({
      isSettingUser: !prevState.isSettingUser
    }));
  };

  render() {
    const { user, setUser } = this.props;
    const userSession = user ? user[0] : JSON.parse(LocalStoreService.getItem(USER_SESSION));
    const { isSettingUser } = this.state;

    let infoUser = <UserInfo userSession={userSession} />;
    if (isSettingUser) {
      infoUser = (
        <UserEdit userSession={userSession} setUser={setUser} editUser={this.editUser} {...this.props} />
      );
    }

    if (!userSession) {
      return Loading();
    }
    return (
      <div className={styles.user}>
        <div className={styles.titleUser}>
          <h3>
            <i className="far fa-user-circle" /> User Profile
          </h3>
        </div>
        <div className={styles.userContainer}>
          <div className={styles.profile}>
            <img className={styles.image} src={userSession.imageUrl} alt="User" />
            <h4 className={styles.name}>{userSession.fullname}</h4>
            <h5 className={styles.username}>
              <i className="fab fa-slack" /> {userSession.username}
            </h5>
            <button className={styles.btn} onClick={this.editUser}>
              Editar perfil
            </button>
          </div>
          {infoUser}
        </div>
        <div className={styles.btnBack}>
          <Link to={`/game`}>
            <button className={styles.btn}>Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user
});

const mapDispatchToProps = dispatch => ({
  getUser: values => dispatch(userActions.getUser(values)),
  setUser: values => dispatch(userActions.setUser(values))
});

User.propTypes = {
  getUser: PropTypes.func,
  setUser: PropTypes.func,
  user: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      mail: PropTypes.string,
      password: PropTypes.string,
      username: PropTypes.string,
      fullname: PropTypes.string,
      gender: PropTypes.string,
      country: PropTypes.string,
      imageUrl: PropTypes.string
    })
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
