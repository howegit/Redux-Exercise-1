import React from 'react';
import styles from './styles';

function App({
  score,
  coins,
  world,
  level,
  timeLeft,
  moveLeft,
  moveRight,
  marioPosition,
}) {
  return (
    <div>
      <div style={styles.buttonGroup}>
        <button className="btn btn-info" type="button" onClick={moveLeft}>
          Move left
        </button>
        <button className="btn btn-info" type="button" onClick={moveRight}>
          Move right
        </button>
      </div>
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
        <div style={{ ...styles.mario, left: marioPosition }} />
        <div style={styles.block} />
      </div>
    </div>
  );
}

export default App;
