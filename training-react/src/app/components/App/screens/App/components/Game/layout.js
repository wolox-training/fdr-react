import React from 'react';
import PropTypes from 'prop-types';

import Board from '../../screens/Board';

import styles from './styles.scss';

function GameDetails({ isWinner, current, history, boardClick, getStatus, jumpTo }) {
  const moves = history.map((step, move) => {
    const desc = `Go to ${move ? `move #${move}` : 'game start'}`;
    return (
      <li key={step}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className={styles.game}>
      <div className={styles.board}>
        <Board squares={current.squares} onClick={boardClick} />
        <div className={styles.info}>
          <div>{getStatus(isWinner)}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}

GameDetails.propTypes = {
  boardClick: PropTypes.func,
  getStatus: PropTypes.func,
  jumpTo: PropTypes.func,
  isWinner: PropTypes.bool,
  history: PropTypes.arrayOf(PropTypes.shape()),
  current: PropTypes.shape()
};

export default GameDetails;
