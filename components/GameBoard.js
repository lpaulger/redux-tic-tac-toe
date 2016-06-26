import React from 'react'
import Tile from './Tile';

const GameBoard = ({onClick, tiles}) => (
  <div onClick={onClick}>
    {
      tiles.map((tile, index) => {
        return <Tile key={index} tile={tile} />
      })
    }
  </div>
)

export default GameBoard
