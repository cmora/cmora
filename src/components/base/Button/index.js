import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Styles.scss';

const Button = ({
  className,
  label,
  to,
}) => {
  return (
    <div
      className={classnames('button', className)}
      data-text={label}
      to={to}
    >
      { label }
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  to: PropTypes.string,
}

export default Button;
