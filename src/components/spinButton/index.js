import React from 'react';

const Button = ({ value, isDisabled }) => {
  return (
    <button type='button' disabled={isDisabled} className='spin-btn'>
      {value}
    </button>
  );
};

export default Button;
