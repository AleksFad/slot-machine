import React, { useState } from 'react';
import { gameConfig } from '../../assets/config/game';

const ScoreTable = ({ spin, startAnimation }) => {
  const balance = gameConfig.find(item => item.key === 'GAME_BALANCE').value;
  const bet = gameConfig.find(item => item.key === 'GAME_COST').value;
  const min = gameConfig.find(item => item.key === 'GAME_BALANCE_MIN').value;
  const max = gameConfig.find(item => item.key === 'GAME_BALANCE_MAX').value;

  const [isDisabled, setisDisabled] = useState(false);
  const [isstartSpin, setStartSpin] = useState(spin);
  const [gameBalance, setgameBalance] = useState(balance);

  const spinClick = gameBalance => {
    setgameBalance(gameBalance - 1);
    startAnimation(true);
    setStartSpin(true);
    setisDisabled(true);
    setTimeout(
      function() {
        setisDisabled(false);
        setStartSpin(false);
        startAnimation(false);
      }.bind(this),
      2000
    );
  };

  const onBalanceChange = balance => {
    if (balance > max) {
      balance = max;
    }
    setgameBalance(balance);
  };

  return (
    <div className='score'>
      <div className='row'>
        <div className='column column-balance'>
          <h3>Balance</h3>
          <input
            type='number'
            min={min}
            max={max}
            value={gameBalance}
            disabled={isDisabled}
            onChange={e => onBalanceChange(e.target.value)}
          />
        </div>
        <div className='column column-bet'>
          <h3>Bet</h3>
          <span>{bet}</span>
        </div>
        <div className='column column-btn'>
          <button
            onClick={() => {
              spinClick(gameBalance);
            }}
            type='button'
            disabled={isDisabled}
            className={`spin-btn ${isstartSpin ? 'disable' : ''}`}
          >
            {isDisabled ? 'SPINNING' : 'SPIN'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreTable;
