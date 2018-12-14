import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import userActions from '../../../redux/user/actions';
import Loading from '../Loading';

import styles from './styles.scss';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.userSession);
  }

  render() {
    const { user } = this.props;
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
            <button className={styles.btn}>Editar perfil</button>
          </div>
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
