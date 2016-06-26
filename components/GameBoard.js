import React from 'react'

const GameBoard = ({onClick, text}) => (
  <div onClick={onClick}>
    { text }
  </div>
)

export default GameBoard
