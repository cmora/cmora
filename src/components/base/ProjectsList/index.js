import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { allProjects } from '../../../store/slices/projects/projects-slice';
import { allProjectsResults } from '../../../store/slices/projects/projects-selectors';
import { isValidArray } from '../../../utils';

// COMPONENTS
import LoaderSpiner from '../LoaderSpiner';
import ProjectItem from './ProjectItem';

import './Styles.scss';

const ProjectsList = ({
  limit,
}) => {
  const element = useRef();
  const dispatchProjects = useDispatch(allProjects);
  const projects = useSelector(allProjectsResults);

  useEffect(() => {
    const onchange = (entries) => {
      const el = entries[0];
      if (el && el.isIntersecting && !isValidArray(projects)) {
        dispatchProjects(allProjects());
        observer.disconnect();
      }
    }

    const observer = new IntersectionObserver(onchange, {
      rootMargin: `100px`,
    });

    observer.observe(element.current);

    return () => observer.disconnect();
  }, [dispatchProjects, projects]);

  const projectsList = projects.slice(0, limit);

  return (
    <div
      className="projects-list"
      ref={element}
    >
      <div className="row">
        {!isValidArray(projectsList) ? (
          <LoaderSpiner dark />
        ) : (
          <>
            {projectsList.map(s => (
              <div className="column small-12 medium-6 large-4">
                <ProjectItem {...s} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

ProjectsList.propTypes = {
  limit: PropTypes.number,
}

ProjectsList.defaultProps = {
  limit: 6,
}

export default ProjectsList;
