import React, { Fragment, useState } from 'react';
import Menu from './Menu/Menu';
import './navbar.css';

function Navbar() {
  const [ menu, toggleMenu ] = useState(false);

  const handleToggle = () => {
    toggleMenu(!menu)
  }

  return (
    <Fragment>
      <nav>
        <div className="nav-items">
          <h2>Sage</h2>
          <div
            className="menu-icon"
            onClick={() => toggleMenu(!menu)}
          >
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </div>
      </nav>
      { menu ? (
        <Menu
          display={menu}
          toggle={handleToggle}
        />
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  )
}

export default Navbar;
