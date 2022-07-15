import React,{useState} from "react";
import Board from "./components/Board"
import "./styles/root.scss"
import calculateWinner from "./helper"

const App = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? "X" : "O"}`;

  function handleSquareClick(position){
      if(board[position] || winner){
          return;
      }

      setBoard( (prev) => {
          return prev.map((square, pos) => {
              if(pos === position){
                  return isXNext ? 'X' : 'O';
              }
              return square;
          });
      });
      setIsXNext( (prev) => !prev);
  }

  return (
    // <> </> OR <React.Fragment></React.Fragment> insted of div
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick}/>
    </div>
  );
};

export default App;