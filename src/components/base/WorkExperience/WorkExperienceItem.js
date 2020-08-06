import React from 'react';

import './Styles.scss';


const WorkExperience = ({
  company,
  from,
  to,
  position,
  sumary,
}) => {
  return (
    <div className="work-experience__item">
      <div className="row">
        <div className="column small-12 medium-4 large-3">
          {company && (
            <h4 className="work-experience__item-company">{ company }</h4>
          )}
          {from && to && (
            <h6 className="work-experience__item-date">{ from } - { to }</h6>
          )}
        </div>
        <div className="column small-12 medium-8 large-9">
          {position && (
            <h3 className="work-experience__item-position">{ position }</h3>
          )}
          {sumary && (
            <div className="work-experience__item-sumary">{ sumary }</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
