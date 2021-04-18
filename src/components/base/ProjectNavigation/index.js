import React from 'react';
import * as LABEL from '../../../constants/labels';

import CustomLink from '../CustomLink';

import './Styles.scss';

const ProjectNavigation = ({
  next,
  prev,
}) => {
  return (
    <div className="project-navigation">
      <div className="row">
        <div className="column small-6">
          {prev && (
            <CustomLink
              className="project-navigation__link prev-nav"
              to={`/project/${prev.slug}`}
            >
              <h6 className="project-navigation__label">{LABEL.PREVIOUS_PROJECT}</h6>
              {prev?.title && (
                <p className="project-navigation__title">{prev.title}</p>
              )}
              {prev?.client && (
                <p className="project-navigation__client">{prev.client}</p>
              )}
            </CustomLink>
          )}
        </div>
        <div className="column small-6">
          {next && (
            <CustomLink
              className="project-navigation__link next-nav"
              to={`/project/${next.slug}`}
            >
              <h6 className="project-navigation__label">{LABEL.NEXT_PROJECT}</h6>
              {next?.title && (
                <p className="project-navigation__title">{next.title}</p>
              )}
              {next?.client && (
                <p className="project-navigation__client">{next.client}</p>
              )}
            </CustomLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectNavigation;
