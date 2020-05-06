import React, { useState } from 'react';
import Reels from '../reels';
import ScoreTable from '../scoreTable';

import slots from '../../assets/config/slots';

const Table = ({ spin }) => {
  const [startAnimation, setstartAnimation] = useState(false);

  const updateStartAnimation = value => {
    setstartAnimation(value);
  };

  //Random array
  const shuffle = array => {
    array.sort(() => Math.random() - 0.5);
    return array;
  };

  const random = max => {
    return Math.floor(Math.random() * (max + 1));
  };

  const calculateResultCombination = idx => {
    const max = slots.reelSymbolsOrder.length - 1;
    let result = [];
    switch (idx) {
      case 0:
        result = [
          slots.reelSymbolsOrder[random(max)],
          slots.reelSymbolsOrder[random(max)],
          slots.reelSymbolsOrder[random(max)]
        ];
        break;
      case 1:
        result = [
          slots.reelSymbolsOrder[random(max)],
          slots.reelSymbolsOrder[random(max)],
          slots.reelSymbolsOrder[random(max)]
        ];
        break;
      case 2:
        result = [
          slots.reelSymbolsOrder[random(max)],
          slots.reelSymbolsOrder[random(max)],
          slots.reelSymbolsOrder[random(max)]
        ];
        break;
      default:
        result = [
          slots.reelSymbolsOrder[random(max)],
          slots.reelSymbolsOrder[random(max)],
          slots.reelSymbolsOrder[random(max)]
        ];
        break;
    }
    return result;
  };

  return (
    <div className='table'>
      <div className='table__wrapper'>
        <div className='grid'>
          <div className='column reel-left'>
            <Reels
              items={calculateResultCombination(0)}
              pos='left'
              isSpininng={startAnimation}
            />
          </div>
          <div className='column reel-center'>
            <Reels
              items={calculateResultCombination(1)}
              pos='center'
              isSpininng={startAnimation}
            />
          </div>
          <div className='column reel-right'>
            <Reels
              items={calculateResultCombination(2)}
              pos='right'
              isSpininng={startAnimation}
            />
          </div>
        </div>
      </div>
      <ScoreTable spin={false} startAnimation={updateStartAnimation} />
    </div>
  );
};

export default Table;
