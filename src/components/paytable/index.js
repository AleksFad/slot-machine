import React, { Fragment } from 'react';
import slots from '../../assets/config/slots';

const PayTable = () => {
  const winCombinations = Object.entries({
    ...slots.payTable.single
  });
  return (
    <Fragment>
      <div className='pay-table__wrapper'>
        <div className='heading'>Jackpot rules</div>
        {winCombinations.map(([winCombinationKey, winCombinations]) => (
          <div key={winCombinationKey} className='row'>
            <div className='column image-column__left'>
              {winCombinationKey.split(' ').map((slotName, index) => (
                <img
                  key={index}
                  src={`/images/${slots.reelSymbols[slotName].img}`}
                  alt={slotName}
                />
              ))}
            </div>
            <div className='column image-column__right'>
              <ul>
                <li>Top: {winCombinations.top_line}</li>
                <li>Center: {winCombinations.center_line}</li>
                <li>Bottom: {winCombinations.bottom_line}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default PayTable;
