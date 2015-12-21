import React from 'react';

const OpenRequest = ({ counter, increment, decrement }) => (
  <div>
  	<span>{counter}</span>
  	<button className="mdl-button mdl-js-button mdl-button--fab" onClick={increment}>
  		<i className="material-icons">add</i>
    </button>
    <button className="mdl-button mdl-js-button mdl-button--fab" onClick={decrement}>
      <i className="material-icons">remove</i>
    </button>
  </div>
);

export default OpenRequest;