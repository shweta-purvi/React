import { useState } from 'react';
import './GameApp.css';

export default function GameApp() {
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(true);
  const [boxes, setBoxes] = useState(Array(9).fill(null));

  const startGame = () => {
    setScore(0);
    setGameActive(true);
    setBoxes(Array(9).fill(null));
  };

  const clickBox = (index) => {
    if (boxes[index] || !gameActive) return;
    
    const newBoxes = [...boxes];
    newBoxes[index] = '⭐';
    setBoxes(newBoxes);
    setScore(score + 10);

    const randomIndex = Math.floor(Math.random() * 9);
    if (newBoxes[randomIndex] === null) {
      newBoxes[randomIndex] = '💣';
      setBoxes(newBoxes);
      setGameActive(false);
    }
  };

  const isBomb = boxes.some(box => box === '💣');

  return (
    <div className="game-container">
      <div className="game-card">
        <h2>🎮 Click Game</h2>
        
        <div className="score-board">
          <div className="score-item">
            <span>Score</span>
            <h3>{score}</h3>
          </div>
          <div className="score-item">
            <span>Status</span>
            <h3 className={gameActive ? 'active' : 'failed'}>
              {gameActive ? '🎯 Playing' : '💥 Game Over'}
            </h3>
          </div>
        </div>

        <div className="game-board">
          {boxes.map((box, index) => (
            <button
              key={index}
              className={`game-box ${box ? 'clicked' : ''}`}
              onClick={() => clickBox(index)}
              disabled={!gameActive || box !== null}
            >
              {box && <span className="box-icon">{box}</span>}
            </button>
          ))}
        </div>

        <div className="game-info">
          <p>Click the stars and avoid the bomb! 💣</p>
          <button className="start-btn" onClick={startGame}>
            {gameActive ? 'New Game' : 'Play Again'}
          </button>
        </div>
      </div>
    </div>
  );
}
