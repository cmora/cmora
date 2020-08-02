import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isLoading } from '../../../store/slices/page/page-slice';

const CustomLink = ({
  className,
  to,
  children,
}) => {
  const history = useHistory();
  const dispatch = useDispatch(isLoading)

  const handleOnClick = (e, slug) => {
    e.preventDefault();
    dispatch(isLoading())

    setTimeout(() => {
      history.push(to);
    }, 1000);
  };

  return (
    <a
      className={classnames('custom-link', className)}
      onClick={handleOnClick}
      to={to}
      href={to}
    >
      { children }
    </a>
  );
};

CustomLink.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  to: PropTypes.string,
}

export default CustomLink;
