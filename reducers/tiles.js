const tiles = (state = new Array(9).fill({symbol: 'X'}), action) => {
  switch (action.type) {
    case 'TILE_CLICK':
      console.log('TILE', action)
      return state;
    default:
      return state
  }
}

export default tiles
