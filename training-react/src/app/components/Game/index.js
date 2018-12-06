import React, { Component } from 'react';

import Board from '../Board';
import LoginForm from '../LoginForm';

import calculateWinner from './utils';
import styles from './styles.scss';

class Game extends Component {
  state = {
    /* eslint-disable prettier/prettier */
    history: [{
      squares: Array(9).fill(null),
    }],
    xIsNext: true,
    stepNumber: 0,
    isWinner: null,
    showLogin: false
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

  login = () => {
    this.setState(prevState => ({
      showLogin: !prevState.showLogin
    }));
  };

  submit = values => {
    this.setState({ showRegister: false });
    window.alert(JSON.stringify(values, null, 4)); // eslint-disable-line no-alert
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
          <div className={styles.info}>
            <div>{this.getStatus(this.state.isWinner)}</div>
            <ol>{moves}</ol>
          </div>
        </div>
        <div className={styles.loginForm}>
          <button onClick={this.login}>Login</button>
          <div className={this.state.showLogin ? '' : styles.hidden}>
            <LoginForm onSubmit={this.submit} />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
