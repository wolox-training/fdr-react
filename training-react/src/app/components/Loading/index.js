import React from 'react';

import LoadingItem from './layout';

function withLoadingScreen(WrappedComponent) {
  return function LoadingScreen({ isLoading, ...otherProps }) {
    if (isLoading) return <LoadingItem />;
    return <WrappedComponent {...otherProps} />;
  };
}

export default withLoadingScreen;
