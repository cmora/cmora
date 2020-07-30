import React, { useState } from 'react';
import { isMobile, MobileView } from 'react-device-detect';

import MenuNav from "../../base/MenuNav";

// Styles
import './Styles.scss';

const Nav = () => {
  const [ showMenu, setShowMenu ] = useState(!isMobile);

  const handleNavClick = () => {
    setShowMenu(prevState => !prevState);
  }

  return (
    <>
      <nav className={`main-nav ${showMenu ? 'is-visible' : 'is-hidden'}`}>
        <MenuNav
          className="main-nav__menu"
          links={['Home', 'About', 'Works', 'Contact']}
        />
        <div
          className="main-nav__icon"
          onClick={handleNavClick}
        >
          <span className="main-nav__icon-span" />
        </div>
      </nav>
      <MobileView>
        <nav className={`main-nav-mobile ${showMenu ? 'is-visible' : 'is-hidden'}`}>
          <div className="main-nav-mobile__container">
            <div className="main-nav-mobile__cell">
              <MenuNav
                className="main-nav-mobile__menu"
                links={['Home', 'About', 'Works', 'Contact']}
                handleNavigation={handleNavClick}
              />
            </div>
          </div>
        </nav>
      </MobileView>
    </>
  );
};

export default Nav;
