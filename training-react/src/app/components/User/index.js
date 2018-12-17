import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import userActions from '../../../redux/user/actions';
import Loading from '../Loading';
import UserInfo from '../UserInfo';
import UserEdit from '../UserEdit';

import styles from './styles.scss';

class User extends Component {
  state = {
    isSettingUser: false
  };

  componentDidMount() {
    this.props.getUser(this.props.userSession);
  }

  editUser = () => {
    this.setState(prevState => ({
      isSettingUser: !prevState.isSettingUser
    }));
  };

  render() {
    const { user, setUser } = this.props;
    const { isSettingUser } = this.state;

    let infoUser = <UserInfo user={user} />;
    if (isSettingUser) {
      infoUser = <UserEdit user={user} setUser={setUser} />;
    }

    if (!user) {
      return <Loading />;
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
            <img className={styles.image} src={user.imageUrl} alt="User" />
            <h4 className={styles.name}>{user.fullname}</h4>
            <h5 className={styles.username}>
              <i className="fab fa-slack" /> {user.username}
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
  userSession: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string
  }),
  getUser: PropTypes.func,
  setUser: PropTypes.func,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
