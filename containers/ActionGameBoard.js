import { connect } from 'react-redux'
import { nextPlayer,onTileClick  } from '../actions'
import GameBoard from '../components/GameBoard'

const mapStateToProps = (state) => {
  return {
    tiles: state.tiles
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id, symbol) => {
      // change turn to next player
      console.log(id)
      dispatch(nextPlayer("hello"))
    },
    onTileClick: (id, symbol) => {
      dispatch(onTileClick(id, symbol))
    }
  }
}

const ActionGameBoard = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameBoard)

export default ActionGameBoard
