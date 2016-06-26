import { connect } from 'react-redux'
import { GameBoardClicked } from '../actions'
import GameBoard from '../components/GameBoard'

const mapStateToProps = (state) => {
  return {
    text: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      // change turn to next player
      dispatch(gameBoardClicked("hello"))
    }
  }
}

const ActionGameBoard = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameBoard)

export default ActionGameBoard
