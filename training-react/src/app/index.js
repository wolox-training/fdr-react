import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import User from './screens/User';
import Topbar from './components/Topbar';
import { PrivateRoute } from './components/PrivateRoute';
import Game from './screens/Game';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Topbar} />
        <Switch>
          <PrivateRoute exact path="/" component={Game} />
          <PrivateRoute exact path="/game" component={Game} />
          <PrivateRoute exact path="/user/:userId" component={User} />
          <Route path="*" render={() => <h2>Page not found</h2>} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user
});

export default connect(mapStateToProps)(App);
