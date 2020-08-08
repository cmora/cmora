import React from 'react';
import * as LABEL from '../../../constants/labels';

import './Styles.scss';

const ProjectChallenge = ({
  text,
  image,
}) => {
  return (
    <div className="row">
      <div className="column medium-7 small-12">
        <div className="project-challenge__text">
          <h2>{LABEL.PROJECT_CHALLENGE}</h2>
          {text}
        </div>
      </div>
      <div className="column medium-5 small-12">
        <div className="project-challenge__image">
          <img src={image} alt={LABEL.PROJECT_CHALLENGE} />
        </div>
      </div>
    </div>
  );
}

export default ProjectChallenge;
