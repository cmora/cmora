import React from 'react';
import { NavLink } from 'react-router-dom';
import { isMobile } from "react-device-detect";

const MenuNav = ({
  className,
  handleNavigation,
  links,
}) => {
  return (
    <ul className={className}>
      {links.map(link => {
        return (
          <li key={link.toLowerCase()}>
            <NavLink
              exact
              to={`/${ link === 'Home' ? '' : link.toLowerCase()}`}
              onClick={isMobile ? () => handleNavigation() : null}
              activeClassName="active"
            >
              {link}
            </NavLink>
          </li>
        )
      })}
    </ul>
  );
};

export default MenuNav;
