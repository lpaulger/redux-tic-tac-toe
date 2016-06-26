const tiles = (state = new Array(9).fill({symbol: 'X'}), action) => {
  switch (action.type) {
    case 'OCCUPY_TILE':
      return state;
    default:
      return state
  }
}

export default tiles
