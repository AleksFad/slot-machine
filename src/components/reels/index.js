import React, { useState, useEffect } from 'react';

import slots from '../../assets/config/slots';

const Reels = ({ isSpininng, pos, items }) => {
  const [final, setfinal] = useState([]);

  useEffect(() => {
    const arr = combinationOnReels(items);
    //setfinal(final => final.concat(arr));
    //setfinal(final => final.concat(items));
  }, [items]);

  const combinationOnReels = combination => {
    const singleCombination = combination.join(' ');
    const win = Object.entries({
      ...slots.payTable.single
    });
    // const result = [[combination[0], combination[1], combination[2]]];
    // return result;
  };

  return (
    <div className={`reel ${isSpininng ? 'reel-spinning' : 'stop'} `}>
      {items.map((symbolName, index) => (
        <div key={index} className='reel-image'>
          <img
            badge={symbolName}
            src={`/images/${slots.reelSymbols[symbolName].img}`}
            alt='reel'
          />
        </div>
      ))}
    </div>
  );
};

export default Reels;
