import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './Styles.scss';

const Button = ({
  className,
  label,
  to,
}) => {

  return (
    <Link
      className={classnames('button', className)}
      data-text={label}
      to={to}
    >{label}</Link>
  );
};

export default Button;
