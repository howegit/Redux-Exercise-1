import {
  COLLECT_COINS,
  LOSE_COINS,
  DECREMENT_TIME,
  MOVE_LEFT,
  MOVE_RIGHT,
} from './constants';

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
    case COLLECT_COINS:
      return { ...state, coins: state.coins + 1 };
    case LOSE_COINS:
      return { ...state, coins: 0 };
    case DECREMENT_TIME:
      return { ...state, timeLeft: state.timeLeft - 1 };
    case MOVE_LEFT:
      return { ...state, marioPosition: state.marioPosition - 10 };
    case MOVE_RIGHT:
      return { ...state, marioPosition: state.marioPosition + 10 };
    default:
      return state;
  }
}

export default reducer;
