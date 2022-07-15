import React from "react"

function Square(props) {
  return (
    <button 
      type="button"
      onClick={props.onClick} 
      className={`square ${props.isWinningSquare ? "winning" : ""} ${props.val === "X" ? "text-green" : "text-orange"}`}
    >
      {props.val}
    </button>
  )
}

export default Square;