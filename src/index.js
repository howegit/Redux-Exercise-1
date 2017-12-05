/**
 * Exercise 1: add the following functionality:
 *   lose coins - coins reset to 0
 *   decrement time - time decrements by 1
 *   move left and right
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import styles from './styles';

// reducer setup
const initialState = {
  coins: 0,
  score: 0,
  world: 1,
  level: 1,
  marioPosition: 200,
  levelTime: 300,
  timeLeft: 300,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'COLLECT_COINS':
      return { ...state, coins: state.coins + 1 };
    default:
      return state;
  }
}

// redux store setup
const store = createStore(reducer);

// our React app
const SuperMario = () => {
  const {
    coins,
    score,
    world,
    level,
    timeLeft,
    marioPosition,
  } = store.getState();
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.header}>
          <div>MARIO</div>
          <div>{score}</div>
        </div>
        <div style={styles.header}>
          <div>&nbsp;</div>
          <div>
            <span style={styles.coin} />x{coins}
          </div>
        </div>
        <div style={styles.header}>
          <div>WORLD</div>
          <div>{`${world}-${level}`}</div>
        </div>
        <div style={styles.header}>
          <div>TIME</div>
          <div>{timeLeft}</div>
        </div>
      </div>
      <div style={{ ...styles.mario, left: marioPosition }} />
      <div style={styles.block} />
      <div style={styles.buttonGroup}>
        <button
          className="btn btn-info"
          type="button"
          onClick={() => store.dispatch({ type: 'COLLECT_COINS' })}
        >
          Collect coins
        </button>
        <button className="btn btn-info" type="button">
          Lose coins
        </button>
        <button className="btn btn-info" type="button">
          Decrement time
        </button>
        <button className="btn btn-info" type="button">
          Move left
        </button>
        <button className="btn btn-info" type="button">
          Move right
        </button>
      </div>
    </div>
  );
};

// render the app
const rootEl = document.getElementById('root');
const render = () => {
  ReactDOM.render(<SuperMario />, rootEl);
};
render();

// re-render the app on redux state changes
store.subscribe(render);
