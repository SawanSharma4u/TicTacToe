import React from "react"
import Square from "./Square"

function Board({board, handleSquareClick}){
    const renderSquare = (position)=>{
        return(
            <Square val={board[position]} onClick={()=>handleSquareClick(position)} />
        );
    };

    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {/* <Square val={board[1]}>
                    <p> what if we write something here and wants to access it in board component</p>
                </Square> */}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board