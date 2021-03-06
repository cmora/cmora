import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isLoading } from '../../../store/slices/page/page-slice';

const CustomLink = ({
  className,
  to,
  children,
  state,
}) => {
  const history = useHistory();
  const dispatch = useDispatch(isLoading)

  const handleOnClick = (e, slug) => {
    e.preventDefault();
    dispatch(isLoading())

    setTimeout(() => {
      history.push({
        pathname: to,
        state,
      });
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
