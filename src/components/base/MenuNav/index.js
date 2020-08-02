import React from 'react';
import { NavLink } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { isLoading } from '../../../store/slices/page/page-slice';

const MenuNav = ({
  className,
  handleNavigation,
  links,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnClick = (e, slug) => {
    e.preventDefault();
    dispatch(isLoading())
    if (isMobile) {
      handleNavigation();
    }

    setTimeout(() => {
      history.push(`/${ slug === 'home' ? '' : slug}`);
    }, 1000);
  };

  return (
    <ul className={className}>
      {links.map(({ name, slug }) => {
        return (
          <li key={slug}>
            <NavLink
              exact
              to={`/${ slug === 'home' ? '' : slug}`}
              onClick={e => handleOnClick(e, slug)}
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
