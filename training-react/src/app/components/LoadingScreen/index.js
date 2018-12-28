import React, { Component } from 'react';

import LoadingItem from '../LoadingItem';
import UserDetails from '../User/layout';

function withLoadingScreen(WrappedComponent) {
  return class LoadingScreen extends Component {
    render() {
      const { isLoading } = this.props;
      if (isLoading) return <LoadingItem />;
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withLoadingScreen(UserDetails);
