import React from 'react'

const Tile = ({tile, onClick}) => (
  <div onClick={onClick}>
    {tile.symbol}
  </div>
)

export default Tile
