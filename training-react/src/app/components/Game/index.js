import React, { Component } from 'react';

import Board from '../Board';

import calculateWinner from './utils';
import styles from './styles.scss';

class Game extends Component {
  state = {
    history: [{
      squares: Array(9).fill(null),
    }],
    xIsNext: true,
    stepNumber: 0,
    isWinner: null
  };

  getStatus = winner => {
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }
    return status;
  };

  handleClick = i => {
    if (!this.state.isWinner) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = [...current.squares];
      if (!squares[i]) {
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState(prevState => ({
          history: [...history, { squares }],
          xIsNext: !prevState.xIsNext,
          stepNumber: history.length,
          isWinner: calculateWinner(squares)
        }));
      }
    }
  };

  jumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      isWinner: null
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const moves = history.map((step, move) => {
      const desc = `Go to ${move ? `move #${move}` : 'game start'}`;
      return (
        <li key={step}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    return (
      <div className={styles.game}>
        <div className={styles.board}>
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className={styles.info}>
          <div>{this.getStatus(this.state.isWinner)}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
