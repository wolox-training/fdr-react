import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import UserEditDetails from './layout';

class UserEdit extends Component {
  componentDidMount() {
    const { userSession, initialize } = this.props;
    const { gender, country, mail, username, fullname } = userSession;
    initialize({ gender, country, mail, username, fullname });
  }

  onSubmit = values => {
    const { userSession, setUser, editUser } = this.props;
    setUser({ ...userSession, ...values });
    editUser();
  };

  render() {
    return <UserEditDetails onSubmit={this.onSubmit} {...this.props} />;
  }
}

UserEdit.propTypes = {
  userSession: PropTypes.shape({
    id: PropTypes.number,
    mail: PropTypes.string,
    password: PropTypes.string,
    username: PropTypes.string,
    fullname: PropTypes.string,
    gender: PropTypes.string,
    country: PropTypes.string,
    imageUrl: PropTypes.string
  }),
  initialize: PropTypes.func,
  setUser: PropTypes.func,
  editUser: PropTypes.func
};

export default reduxForm({ form: 'edit' })(UserEdit);
