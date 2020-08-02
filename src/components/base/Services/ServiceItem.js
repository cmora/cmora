import React from 'react';
import PropTypes from 'prop-types';

import './Styles.scss';

const ServiceItem = ({
  title,
  index,
  subtitle,
  sumary,
  icon,
}) => {
  return (
    <div className="services-item column small-12 medium-4">
      {icon && (
        <i className={`services-item__icon fa ${icon}`} aria-hidden="true"></i>
      )}
      {title && (
        <h4 className="services-item__title">{`0${index} / ${title}`}</h4>
      )}
      {subtitle && (
        <h5 className="services-item__subtitle">{ subtitle }</h5>
      )}
      {sumary && (
        <p className="services-item__sumary">{ sumary }</p>
      )}
    </div>
  )
};

ServiceItem.propTypes = {
  icon: PropTypes.string,
  index: PropTypes.number.isRequired,
  subtitle: PropTypes.string,
  sumary: PropTypes.string,
  title: PropTypes.string,
}

export default ServiceItem;
