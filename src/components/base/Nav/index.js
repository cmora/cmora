import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { isMobile, MobileView } from 'react-device-detect';
import { getMenuItems } from '../../../store/slices/menu/menu-slice';
import { menuItems, menuStatus } from '../../../store/slices/menu/menu-selectors';
import { STATUS } from '../../../constants';

import MenuNav from "../../base/MenuNav";

// Styles
import './Styles.scss';

const Nav = () => {
  const [ showMenu, setShowMenu ] = useState(!isMobile);
  const dispatch = useDispatch(getMenuItems);
  const links = useSelector(menuItems);
  const status = useSelector(menuStatus);

  useEffect(() => {
    dispatch(getMenuItems());
  }, [dispatch]);

  const handleNavClick = () => {
    setShowMenu(prevState => !prevState);
  }

  if (status !== STATUS.SUCCESS) return null;

  return (
    <>
      <nav
        className={classnames(
          'main-nav',
          {
            'is-visible': showMenu,
          }
        )}
      >
        <MenuNav
          className="main-nav__menu"
          links={links}
        />
        <div
          className="main-nav__icon"
          onClick={handleNavClick}
        >
          <span className="main-nav__icon-span" />
        </div>
      </nav>
      <MobileView>
        <nav
          className={classnames(
            'main-nav-mobile',
            {
              'is-visible': showMenu,
            }
          )}
        >
          <div className="main-nav-mobile__container">
            <div className="main-nav-mobile__cell">
              <MenuNav
                className="main-nav-mobile__menu"
                links={links}
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
