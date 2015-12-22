import React from 'react';

const Button = ({onClick, children}) => (
  <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={onClick}>
    {children}
  </button>
);

export default Button;