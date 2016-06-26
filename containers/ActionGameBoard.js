import { connect } from 'react-redux'
import { nextPlayer } from '../actions'
import GameBoard from '../components/GameBoard'

const mapStateToProps = (state) => {
  return {
    tiles: state.tiles
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      // change turn to next player
      dispatch(nextPlayer("hello"))
    }
  }
}

const ActionGameBoard = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameBoard)

export default ActionGameBoard
