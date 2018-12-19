import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Game from '../Game';
import LocalStoreService from '../../../services/LocalStoreService';
import './styles.scss';
import LoginForm from '../LoginForm';

const USER_SESSION = 'USER_SESSION';

class App extends Component {
  render() {
    const user = JSON.parse(LocalStoreService.getItem(USER_SESSION));
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (user ? <Redirect to="/game" /> : <LoginForm {...props} />)}
          />
          <Route path="/game" component={Game} />
          <Route render={() => <h2>Page not found</h2>} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user
});

export default connect(mapStateToProps)(App);
