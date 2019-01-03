import React, { Component } from 'react';

import calculateWinner from './utils';
import GameDetails from './layout';

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
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
    const { stepNumber, isWinner, xIsNext } = this.state;
    let { history } = this.state;

    if (!isWinner) {
      history = history.slice(0, stepNumber + 1);
      const current = history[history.length - 1];
      const squares = [...current.squares];
      if (!squares[i]) {
        squares[i] = xIsNext ? 'X' : 'O';
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
    const { history, stepNumber, isWinner } = this.state;
    const current = history[stepNumber];
    return (
      <GameDetails
        isWinner={isWinner}
        current={current}
        history={history}
        boardClick={this.handleClick}
        getStatus={this.getStatus}
        jumpTo={this.jumpTo}
      />
    );
  }
}

export default Game;
