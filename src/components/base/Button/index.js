import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isLoading } from '../../../store/slices/page/page-slice';

import './Styles.scss';

const Button = ({
  className,
  label,
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
    <Link
      className={classnames('button', className)}
      data-text={label}
      onClick={handleOnClick}
      to={to}
    >
      {children ? children : label}
    </Link>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  to: PropTypes.string,
}

export default Button;
