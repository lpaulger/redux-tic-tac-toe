import React from 'react'

import Tile from './Tile';

const GameBoard = ({onTileClick, tiles}) => (
  <div>
    {
      tiles.map((tile, index) => {
        return <Tile key={index} tile={tile}  onClick={() => onTileClick(index, tile.symbol)}/>
      })
    }
  </div>
)

export default GameBoard
