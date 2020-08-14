import React from 'react';
import * as LABEL from '../../../constants/labels';

import CustomLink from '../CustomLink';

import './Styles.scss';

const ProjectNavigation = ({
  next,
  prev,
}) => {
  console.log(next);
  console.log(prev);
  return (
    <div className="project-navigation">
      <div className="row">
        <div className="column">
          <div className="project-challenge__text">
            <div className="project-navigation__container">
              {prev && (
                <CustomLink
                  className="project-navigation__link"
                  to={`/project/${prev.slug}`}
                >
                  <h6 className="project-navigation__title">Previous project</h6>
                  {prev?.client && (
                    <p className="project-navigation__client">{prev.client}</p>
                  )}
                </CustomLink>
              )}
              {next && (
                <CustomLink
                  className="project-navigation__link"
                  to={`/project/${next.slug}`}
                >
                  <h6 className="project-navigation__title">Next project</h6>
                  {next?.client && (
                    <p className="project-navigation__client">{next.client}</p>
                  )}
                </CustomLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectNavigation;
