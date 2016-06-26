import { combineReducers } from 'redux'
import gameboard from './gameboard'

const tictactoeApp = combineReducers({
  gameboard
})

export default tictactoeApp
