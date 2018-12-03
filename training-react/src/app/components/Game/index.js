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
    isWinner: false
  };

  getStatus = winner => {
    let status;
    if (winner) {
      status = `Winner: ${this.state.xIsNext ? 'O' : 'X'}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }
    return status;
  };

  handleClick = i => {
    if (!this.props.isWinner) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = [...current.squares];
      if (calculateWinner(squares) || squares[i]) {
        this.setState({
          isWinner: true
        });
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState((prevState, currentProps) => ({
        history: [...history, { squares }],
        stepNumber: history.length,
        xIsNext: !prevState.xIsNext
      }));
    }
  };

  jumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
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
        <Board
          squares={current.squares}
          onClick={(i) => this.handleClick(i)}
        />
        </div>
        <div className={styles.info}>
          <div>{this.getStatus(this.props.isWinner)}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
