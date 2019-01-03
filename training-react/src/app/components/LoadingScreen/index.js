import React from 'react';

import LoadingItem from '../LoadingItem';

function withLoadingScreen(WrappedComponent) {
  return function LoadingScreen({ isLoading, ...otherProps }) {
    if (isLoading) return <LoadingItem />;
    return <WrappedComponent {...otherProps} />;
  };
}

export default withLoadingScreen;
