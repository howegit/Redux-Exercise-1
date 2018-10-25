/**
 * Guided Exercise 1: make Mario move!
 *   - change Mario's initial position to see how he moves on the screen
 *   - class methods to update Mario's position when move left and move right are clicked
 */

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles';

const initialState = {
  marioPositionX: 200, // <-- CHANGE THIS INITIAL POSITION
};

// our React app
class SuperMario extends React.Component {
  state = initialState;

  handleMoveLeft = () => {
    console.log('move left clicked'); // <-- CHECK THE CONSOLE LOG
  };

  render() {
    const { marioPositionX } = this.state;

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
            <button className="btn btn-info" type="button">
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
const rootEl = document.getElementById('root');
const render = () => {
  ReactDOM.render(<SuperMario />, rootEl);
};
render();
