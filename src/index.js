/**
 * Guided Exercise 1: make Mario move!
 *   - change Mario's initial position to see how he moves on the screen
 *   - class methods to update Mario's position when move left and move right are clicked
 */

import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles";

const initialState = {
  marioPositionX: 200, // <-- CHANGE THIS INITIAL POSITION
  marioPositionY: 150
};

// our React app
class SuperMario extends React.Component {
  state = initialState;

  handleMoveLeft = () => {
    let newPositionX = this.state.marioPositionX - 50;
    this.setState({ marioPositionX: newPositionX });
    console.log("move left clicked"); // <-- CHECK THE CONSOLE LOG
  };

  handleMoveRight = () => {
    let newPositionX = this.state.marioPositionX + 50;
    this.setState({ marioPositionX: newPositionX });
    console.log("move right clicked"); // <-- CHECK THE CONSOLE LOG
  };

  handleJump = () => {
    // this.setState((state) => { marioPositionY: state.marioPositionY + 50 }, () => {
    //   setTimeout(() => {
    //     this.setState((state)=>({ marioPositionY: state.marioPositionY - 50 }));
    //   }, 150)
    // })
    let newPositionYup = this.state.marioPositionY - 50;
    this.setState({ marioPositionY: newPositionYup }, () => {
      setTimeout(1000);
      this.handleFallDown();
    });
    console.log("jump clicked"); // <-- CHECK THE CONSOLE LOG
  };

  handleFallDown = () => {
    let newPositionYdown = this.state.marioPositionY;
    while (newPositionYdown < 150 && newPositionYdown > 0) {
      newPositionYdown -= 10;
      this.setState({ marioPositionY: newPositionYdown });
    }
    console.log("falling down");
  };

  render() {
    const { marioPositionX, marioPositionY } = this.state;

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
            <button
              className="btn btn-info"
              type="button"
              onClick={this.handleMoveRight}
            >
              Move right
            </button>
            <button
              className="btn btn-warning"
              type="button"
              onClick={this.handleJump}
            >
              Jump
            </button>
          </div>
        </div>
        <div style={styles.container}>
          <div
            style={{
              ...styles.mario,
              left: marioPositionX,
              top: marioPositionY
            }}
          />
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
