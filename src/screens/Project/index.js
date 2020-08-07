import React, { useEffect } from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useDispatch, useSelector } from 'react-redux';
import { currentProjectSelector, allProjectsResults, loadedProjectsSelector } from '../../store/slices/projects/projects-selectors';
import { getProjectBySlug, setActiveIndex } from '../../store/slices/projects/projects-slice';
import { formatDate } from '../../api/formatters';
import { HERO_SIZES  } from '../../constants/index';
import * as LABEL from '../../constants/labels';

// Components
import Hero from '../../components/base/Hero';
import SectionBlock from '../../components/base/SectionBlock';
import WorkExperience from '../../components/base/WorkExperience';
import Skills from '../../components/base/Skills';
import Button from '../../components/base/Button';

const Project = () => {

  const dispatch = useDispatch();
  const project = useSelector(currentProjectSelector);
  const projects = useSelector(loadedProjectsSelector);
  const { slug } = useParams();

  /**
   * Effect to get the about page data
   */
  useEffect(() => {
    if (!project) {
      const index = projects.findIndex(p => p.slug === slug);
      if (index > 0) {
        dispatch(setActiveIndex(index));
      } else {
        dispatch(getProjectBySlug(slug));
      }
    }
  }, [dispatch, project, projects, slug]);

  useEffect(() => {
    return () => {
      dispatch(setActiveIndex(null));
    }
  }, [dispatch]);

  console.log(project)

  let extraInfo = null;

  if (project) {
    extraInfo = [{
      title: LABEL.ROLE,
      desc: project?.role,
    },
    {
      title: LABEL.CONTEXT,
      desc: project?.context,
    },
    {
      title: LABEL.RELEASE,
      desc: formatDate(project?.publishedDate),
    }]
  }


  return (
    <>
      <Hero
        size={HERO_SIZES.FULL}
        loading={!project}
        title={project?.title}
        label={project?.client}
        image={project?.image}
        extraInfo={extraInfo}
      />
      {project?.description && (
        <SectionBlock
          title={LABEL.PROJECT_TITLE}
          size={HERO_SIZES.SMALL}
          full
          dark
        >
          <>
            <p>{project?.description}</p>
            <br/>
            {project?.website && (
              <a href={project?.website} target="_blank" rel="noopener noreferrer">
                <Button label={LABEL.VISIT_PROJECT} />
              </a>
            )}
          </>
        </SectionBlock>
      )}
      <div className="main-container">
        <div className="row">
          <div className="column large-12">
            <SectionBlock
              title={LABEL.GALLERY_TITLE}
              size={HERO_SIZES.SMALL}
            >
              <p>asa</p>
            </SectionBlock>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project;