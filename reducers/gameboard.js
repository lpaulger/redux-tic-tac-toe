const gameboard = (state = "default", action) => {
  switch (action.type) {
    case 'GAME_BOARD_CLICKED':
      return [
        action.text
      ]
    default:
      return state
  }
}

export default gameboard
