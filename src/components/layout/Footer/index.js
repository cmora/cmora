import React from 'react';
import { useSelector } from 'react-redux';
import Logo from '../../base/Logo';
import MenuNav from '../../base/MenuNav';
import { menuItems } from '../../../store/slices/menu/menu-selectors';

// Styles
import './Styles.scss';

const Footer = () => {
  const links = useSelector(menuItems);

  return (
    <footer className="main-footer">
      <div className="row">
        <div className="column">
          <div className="main-footer__logo">
            <Logo />
          </div>
          <nav className="main-footer__nav">
            <MenuNav
              links={links}
            />
          </nav>
        </div>
      </div>
      <div className="main-footer__copy">Copyright © Cristhian Mora. All rights reserved</div>
    </footer>
  );
};

export default Footer;
