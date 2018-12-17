import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { customInput } from '../Field';
import { required, isEmail } from '../LoginForm/validation';

import styles from './styles.scss';

class UserEdit extends Component {
  componentDidMount() {
    const { user } = this.props;
    this.props.initialize({
      gender: user.gender,
      country: user.country,
      mail: user.mail
    });
  }

  onSubmit = async values => {
    const { user, setUser } = this.props;
    await setUser({ ...user, ...values });
    window.location.reload();
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className={styles.desc}>
        <h2 className={styles.title}>Edit</h2>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          {/* eslint-disable prettier/prettier */}
          <Field
            name="username"
            component={customInput}
            type="text"
            label="Username"
          />
          <Field
            name="fullname"
            component={customInput}
            type="text"
            label="Fullname"
          />
          <Field
            name="gender"
            component={customInput}
            type="text"
            label="Gender"
          />
          <Field
            name="country"
            component={customInput}
            type="text"
            label="Country"
          />
          <Field
            name="mail"
            component={customInput}
            type="text"
            label="Mail"
            validate={[required, isEmail]}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

UserEdit.propTypes = {
  user: PropTypes.shape({
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
  handleSubmit: PropTypes.func
};

UserEdit = reduxForm({ // eslint-disable-line no-class-assign
  form: 'edit'
})(UserEdit);

export default UserEdit;
