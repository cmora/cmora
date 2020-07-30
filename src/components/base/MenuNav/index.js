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
      {links.map(({ name, slug }) => {
        return (
          <li key={slug}>
            <NavLink
              exact
              to={`/${ slug === 'home' ? '' : slug}`}
              onClick={isMobile ? () => handleNavigation() : null}
              activeClassName="active"
            >
              {name}
            </NavLink>
          </li>
        )
      })}
    </ul>
  );
};

export default MenuNav;
