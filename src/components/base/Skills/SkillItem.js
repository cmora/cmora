import React from 'react';

import './Styles.scss';


const SkillItem = ({
  name,
  percentage,
}) => {
  return (
    <div className="skill-item wow fadeIn">
      {name && (
        <h6 className="skill-item__name">{ name }</h6>
      )}
      {percentage && (
        <div className="skill-item__percentage">
          <div className="progres-bar" style={{ width: `${percentage}%` }} />
        </div>
      )}
    </div>
  );
};

export default SkillItem;
