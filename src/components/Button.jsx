import React from 'react';
import classNames from 'classnames';

const Button = ({onClick, accent, children}) => {
  let classes = classNames('mdl-button', 'mdl-js-button', 'mdl-button--raised', 'space-right', `mdl-button--${accent ? 'accent' : 'colored'}`);
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;