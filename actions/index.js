export const nextPlayer = (text) => {
  return {
    type: 'NEXT_PLAYER',
    text
  }
}


export const onTileClick = (id, symbol) => {
  return {
    type: 'TILE_CLICK',
    id,
    symbol
  }
}
