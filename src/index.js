/**
 * Exercise 1: make Mario move!
 *   - change Mario's initial position to see how he moves on the screen
 *   - implement the reducer to update the store in response to actions
 *   - create onClick event handlers that dispatch actions in response to button clicks
 *
 */

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import styles from "./styles";

// reducer setup
const initialState = {
  marioPositionX: 200 // <-- CHANGE THIS INITIAL POSITION
};

function reducer(state = initialState, action) {
  if (action) {
    if (action.type === "moveLeft") {
      const newPositionX = state.marioPositionX - 50;
      return {
        ...state,
        marioPositionX: newPositionX
      };
    }
    if (action.type === "moveRight") {
      const newPositionX = state.marioPositionX + 50;
      return {
        ...state,
        marioPositionX: newPositionX
      };
    }
  }
  return state; // <-- TODO: return a new state for diffenet actions
}

// redux store setup
const store = createStore(reducer);

// our React app
class SuperMario extends React.Component {
  handleMoveLeft = () => {
    const action = { type: "moveLeft" };
    store.dispatch(action);
    console.log("move left clicked"); // <-- TODO: dispatch an action to move Mario left
  };

  handleMoveRight = () => {
    const action = { type: "moveRight" };
    store.dispatch(action);
    console.log("move right clicked"); // <-- TODO: dispatch an action to move Mario right
  };

  render() {
    const { marioPositionX } = store.getState();

    return (
      <div>
        <div style={styles.header}>
          <div style={styles.buttonGroup}>
            <button
              className="btn btn-info"
              type="button"
              onClick={this.handleMoveLeft}
            >
              Move left
            </button>
            {/* TODO: add a onClick handler */}
            <button
              className="btn btn-info"
              type="button"
              onClick={this.handleMoveRight}
            >
              Move right
            </button>
          </div>
        </div>
        <div style={styles.container}>
          <div style={{ ...styles.mario, left: marioPositionX }} />
          <div style={styles.block} />
        </div>
      </div>
    );
  }
}

// render the app
const rootEl = document.getElementById("root");
const render = () => {
  ReactDOM.render(<SuperMario />, rootEl);
};
render();

// re-render the app on redux state changes
store.subscribe(render);
