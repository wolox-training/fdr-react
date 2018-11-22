import React, { Component } from 'react';

import styles from './styles.scss';

class Square extends Component {
  render() {
    return (
      <button className={styles.square} onClick={function() { alert('click'); }}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
