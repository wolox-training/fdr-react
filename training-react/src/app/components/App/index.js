import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import userActions from '../../../redux/user/actions';
import Game from '../Game';
import './styles.scss';
import LoginForm from '../LoginForm';

const USER_SESSION = 'USER_SESSION';

class App extends Component {
  submit = async values => {
    const { getUser } = this.props;
    await getUser(values);
    const { user } = this.props;
    if (user) {
      localStorage.setItem(USER_SESSION, JSON.stringify(user.mail));
      window.alert(`User ${user && user.mail} login succesfully`); // eslint-disable-line no-alert
    } else {
      window.alert(`User-password not found`); // eslint-disable-line no-alert
    }
  };

  render() {
    const user = localStorage.getItem(USER_SESSION);
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={props =>
                user ? <Redirect to="/game" /> : <LoginForm {...props} onSubmit={this.submit} />
              }
            />
            <Route path="/game" component={Game} />
            <Route render={() => <h2>Page not found</h2>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user
});

const mapDispatchToProps = dispatch => ({
  getUser: values => dispatch(userActions.getUser(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
