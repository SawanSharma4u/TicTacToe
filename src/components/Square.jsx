import React from "react"

//function Square({val, children})  children is an array
function Square(props) {
  return (
    <button type="button" className="square" onClick={props.onClick}>{props.val}</button>
  )
}

export default Square