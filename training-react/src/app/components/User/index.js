import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import userActions from '../../../redux/user/actions';
import LocalStoreService from '../../../services/LocalStoreService';
import UserInfo from '../UserInfo';
import UserEdit from '../UserEdit';
import withLoadingScreen from '../LoadingScreen';

import UserDetails from './layout';

const USER_SESSION = 'USER_SESSION';
const UserDetailsWithLoading = withLoadingScreen(UserDetails);

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
    const { isSettingUser } = this.state;

    let infoUserSection = <UserInfo user={user} />;
    if (isSettingUser) {
      infoUserSection = <UserEdit user={user} setUser={setUser} />;
    }

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
