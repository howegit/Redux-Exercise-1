/**
 * Exercise 3: use connect!
 *   Wire this React component up the redux store and actions using react-redux's connect
 *
 *   Hint: you no longer need to import or call methods on the store
 */

import React from "react";
import { connect } from "react-redux";

// import our redux action types
import { MOVE_LEFT, MOVE_RIGHT } from "../constants";

import App from "../components/App";

function AppContainer(props) {
  const { coins, score, world, level, timeLeft, marioPosition } = props;

  const gameState = {
    coins,
    score,
    world,
    level,
    timeLeft,
    marioPosition
  };

  return (
    <App
      {...gameState}
      moveLeft={props.moveLeftwards}
      moveRight={props.moveRightwards}
    />
  );
}

function mapStateToProps(state) {
  return {
    coins: state.coins,
    score: state.score,
    world: state.world,
    level: state.level,
    timeLeft: state.timeLeft,
    marioPosition: state.marioPosition
  };
}

function mapDispatchToProps(dispatch) {
  return {
    moveLeftwards: () => dispatch({ type: MOVE_LEFT }),
    moveRightwards: () => dispatch({ type: MOVE_RIGHT })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
