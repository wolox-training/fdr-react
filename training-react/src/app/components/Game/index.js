import React, { Component } from 'react';

import Board from '../Board';

import styles from './styles.scss';

class Game extends Component {
  render() {
    return (
      <div className={styles.game}>
        <div className={styles.board}>
          <Board />
        </div>
        <div className={styles.info}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
