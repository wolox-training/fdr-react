import React, { Component } from 'react';

import LoadingItem from '../LoadingItem';

const withLoadingScreen = WrappedComponent =>
  class LoadingScreen extends Component {
    render() {
      const { user } = this.props;
      if (!user) return <LoadingItem />;
      return <WrappedComponent {...this.props} />;
    }
  };

export default withLoadingScreen;
