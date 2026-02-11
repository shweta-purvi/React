import { useState } from 'react';
import './TicTacToe.css';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isBoardFull = board.every(square => square !== null);

  const handleClick = (index) => {
    if (board[index] || winner || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
  };

  const getStatus = () => {
    if (winner) {
      return `🎉 Winner: ${winner}`;
    } else if (isBoardFull) {
      return "🤝 It's a Draw!";
    } else {
      return `Current Player: ${isXNext ? '❌ X' : '⭕ O'}`;
    }
  };

  return (
    <div className="tictactoe-container">
      <div className="tictactoe-card">
        <h2>🎮 Tic Tac Toe</h2>
        
        <div className="status-box">
          {getStatus()}
        </div>

        <div className="board">
          {board.map((value, index) => (
            <button
              key={index}
              className="square"
              onClick={() => handleClick(index)}
            >
              {value === 'X' && <span className="x">❌</span>}
              {value === 'O' && <span className="o">⭕</span>}
            </button>
          ))}
        </div>

        <button className="reset-btn" onClick={resetGame}>
          New Game
        </button>

        <div className="rules">
          <p>👥 2 Player Game</p>
          <p>Take turns clicking cells</p>
          <p>Get 3 in a row to win!</p>
        </div>
      </div>
    </div>
  );
}
