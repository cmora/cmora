import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import { useHistory } from "react-router-dom";
import isFunction from 'lodash/isFunction';
import { useDispatch } from 'react-redux';
import { isLoading } from '../../../store/slices/page/page-slice';
import { isValidArray } from '../../../utils';

const MenuNav = ({
  className,
  handleNavigation,
  links,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { location: { pathname } } = history;
  const [location, setLocation] = useState(pathname);

  const handleOnClick = (e, slug) => {
    e.preventDefault();
    dispatch(isLoading())
    if (isMobile && isFunction(handleNavigation)) {
      handleNavigation();
    }

    setTimeout(() => {
      history.push(`/${ slug === 'home' ? '' : slug}`);
    }, 1000);
  };

  useEffect(() => {
    return history.listen((location) => {
      setLocation(location.pathname)
    })
  },[history])

  if (!isValidArray(links)) return null;

  const getLink = (slug) => {
    if (!slug) return '/';
    return `/${ slug === 'home' ? '' : slug}`;
  }


  return (
    <ul className={className}>
      {links.map(({ name, slug, id }) => {
        return (
          <li key={id}>
            {location === getLink(slug) ? (
              <span className="active">{ name }</span>
            ) : (
              <NavLink
                exact
                to={getLink(slug)}
                onClick={e => handleOnClick(e, slug)}
                activeClassName="active"
              >
                { name }
              </NavLink>
            )}
          </li>
        )
      })}
    </ul>
  );
};

export default MenuNav;
