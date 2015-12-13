import React from 'react';

const Header = ({ children }) => (
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">
      <span className="mdl-layout-title">{children}</span>
    </div>
  </header>
);

export default Header;