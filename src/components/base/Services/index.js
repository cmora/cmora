import React from 'react';
import PropTypes from 'prop-types';
import { isValidArray } from '../../../utils';
import ServiceItem from './ServiceItem';

import './Styles.scss';

const Services = ({
  services,
}) => {
  if (!isValidArray(services)) return null;

  return (
    <div className="row">
      {services.map((s, i) => <ServiceItem key={s.id} index={i} {...s} />)}
    </div>
  );
};

Services.propTypes = {
  services: PropTypes.array.isRequired,
}

export default Services;
