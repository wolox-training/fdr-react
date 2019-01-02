import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { customInput } from '../../../../components/Field';
import { required, isEmail } from '../../components/Login/validation';

import styles from './styles.scss';

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
    const { handleSubmit } = this.props;

    return (
      <div className={styles.desc}>
        <h2 className={styles.title}>Edit</h2>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field name="username" component={customInput} type="text" label="Username" />
          <Field name="fullname" component={customInput} type="text" label="Fullname" />
          <Field name="gender" component={customInput} type="text" label="Gender" />
          <Field name="country" component={customInput} type="text" label="Country" />
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
  handleSubmit: PropTypes.func,
  setUser: PropTypes.func,
  editUser: PropTypes.func
};

export default reduxForm({ form: 'edit' })(UserEdit);
