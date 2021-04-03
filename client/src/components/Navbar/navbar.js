import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="nav-items">
        <h3>Sage</h3>
        <div className="menu-icon">
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
