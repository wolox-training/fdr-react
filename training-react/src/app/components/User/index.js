import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import userActions from '../../../redux/user/actions';
import LocalStoreService from '../../../services/LocalStoreService';
import UserInfo from '../UserInfo';
import UserEdit from '../UserEdit';

import UserDetailsWithLoading from './layout';

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

    const infoUserSection = isSettingUser ? (
      <UserEdit userSession={userSession} setUser={setUser} editUser={this.editUser} {...this.props} />
    ) : (
      <UserInfo userSession={userSession} />
    );

    return (
      <UserDetailsWithLoading
        isLoading={!user}
        user={user}
        userSection={infoUserSection}
        editUser={this.editUser}
      />
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
