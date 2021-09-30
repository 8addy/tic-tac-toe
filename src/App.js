import { useState } from 'react';
import './App.css';
import Game from './components/Game';
import GameOver from './components/Game/GameOver';
import Score from './components/Game/Score';
import { makeBoard, winningConditions } from './helpers';

const PLAYER_X = "X";
const PLAYER_O = "O";

const App = () => {

  const [board, setBoard] = useState(makeBoard()); // state that define all the squares
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X); // state that define the current player
  const [gameOver, setGameOver] = useState(false);
  const [playerWon, setPlayerWon] = useState(null);
  const [gameScore, setGameScore] = useState([]);

  // check if there is a winner
  const checkWinner = (updatedBoard) => {
    for (let index = 0; index < winningConditions.length; index++) {
      const [a, b, c] = winningConditions[index];
      if(updatedBoard[a] === ''|| updatedBoard[b] === '' || updatedBoard[c] === '') continue;
      if(updatedBoard[a] === updatedBoard[b] && updatedBoard[a] === updatedBoard[c]) {
        setPlayerWon(currentPlayer);
        let updateGameScore = [...gameScore];
        updateGameScore.push(currentPlayer);
        setGameScore(updateGameScore);
        return true;
      }
    }

    if(!updatedBoard.includes('')) {
     setGameOver(true); 
    }
  }

  const handleClick = i => {

    if(gameOver) return;

    const updateBoard = [...board];
    updateBoard[i] = currentPlayer;
    setBoard(updateBoard);
    const check = checkWinner(updateBoard);
    if(check) setGameOver(true);
    else setCurrentPlayer(prevPlayer => prevPlayer === PLAYER_X ? PLAYER_O : PLAYER_X);
  }

  const handleReset = () => {
    setBoard(makeBoard);
    setCurrentPlayer(PLAYER_X)
    setGameOver(false);
    setPlayerWon(null);
    setGameScore([]);
  }

  const playAgain = () => {
    setBoard(makeBoard);
    setCurrentPlayer(PLAYER_X)
    setGameOver(false);
    setPlayerWon(null);
  }

  
  return (
    <div className="App">
      {gameOver && <GameOver playerWon={playerWon} playAgain={playAgain} />}
        <Score playerx={PLAYER_X} playero={PLAYER_O} gameScore={gameScore} />
        <Game board={board} handleClick={handleClick} />
        <div className='footer'>
          <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  );
}

export default App;
