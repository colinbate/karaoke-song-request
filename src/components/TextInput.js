import React from 'react';

const TextInput = ({id, label, type, value, onChange, onBlur, onFocus}) => (
  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input className="mdl-textfield__input" type={type || 'text'} id={id} value={value} onChange={onChange} onBlur={onBlur} onFocus={onFocus}/>
    <label className="mdl-textfield__label" htmlFor={id}>{label}</label>
  </div>
);

export default TextInput;