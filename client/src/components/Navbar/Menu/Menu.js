import React, { useEffect } from 'react';
import gsap from 'gsap';
import './menu.css';

function Menu({ display, toggle }) {

  useEffect(() => {
    const menu = document.querySelector('.menu')
    display ? gsap.to(menu, .25, {y: 0}) : gsap.to(menu, .25, {y: -400})
  }, [display])

  return (
        <div className="menu">
          <div className="menu-items">
            <span>Today's Log</span>
            <span>All Logs</span>
            <span>Milestones</span>
            <span>Photos</span>
            <span>Logout</span>
          </div>
        </div>
  )

}

export default Menu;
