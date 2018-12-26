import React, { Component } from 'react';

import LoadingItem from '../LoadingItem';

const withLoadingScreen = WrappedComponent =>
  class LoadingScreen extends Component {
    render() {
      const { isLoading } = this.props;
      if (isLoading) return <LoadingItem />;
      return <WrappedComponent {...this.props} />;
    }
  };

export default withLoadingScreen;
