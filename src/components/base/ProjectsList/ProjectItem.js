import React from 'react';
import PropTypes from 'prop-types';

import CustomLink from '../CustomLink';
import Button from '../Button';

import './Styles.scss';

const ProjectItem = ({
  client,
  shortDescription,
  slug,
  image,
}) => {
  return (
    <div
      className="project-item"
    >
      <CustomLink
        className="project-item__link"
        to={`/project/${slug}`}
      >
        <div
          className="project-item__media"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <div className="project-item__text">
          {client && <h3 className="project-item__text-title">{ client }</h3>}
          {shortDescription && <p className="project-item__text-desc">{ shortDescription }</p>}
          <div className="project-item__line"></div>
          <Button label={'CASE ESTUDY'} />
        </div>
      </CustomLink>
    </div>
  );
};

ProjectItem.propTypes = {
  services: PropTypes.array.isRequired,
}

export default ProjectItem;
