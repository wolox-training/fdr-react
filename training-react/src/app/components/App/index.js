import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Game from '../Game';
import { PrivateRoute } from '../PrivateRoute';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Game} />
          <PrivateRoute exact path="/game" component={Game} />
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
