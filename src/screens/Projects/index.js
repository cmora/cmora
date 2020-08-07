import React, { useEffect } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsPage } from '../../store/slices/page/page-slice';
import { getProjectPageSelector } from '../../store/slices/page/page-selectors';
import { STATUS, HERO_SIZES  } from '../../constants';

// Components
import Hero from '../../components/base/Hero';
import ProjectsList from '../../components/base/ProjectsList';
import SectionBlock from '../../components/base/SectionBlock';

const Projects = () => {
  const dispatchProjectPage = useDispatch(getProjectsPage);
  const projectPage = useSelector(getProjectPageSelector);
  const isLoadedPage = projectPage?.status === STATUS.SUCCESS;

  /**
   * Effect to get the projects page data
   */
  useEffect(() => {
    if (!isLoadedPage) {
      dispatchProjectPage(getProjectsPage());
    }
  }, [dispatchProjectPage, isLoadedPage]);

  return (
    <>
      <Hero
        size={HERO_SIZES.MEDIUM}
        loading={projectPage?.status === STATUS.LOADING}
        title={projectPage?.subtitle}
        image={projectPage?.image}
      />
      <div className="main-container">
        <div className="row">
          <div className="column large-12">
              {projectPage?.body &&
                <SectionBlock title={projectPage?.title} size="medium">
                  <div dangerouslySetInnerHTML={{__html: documentToHtmlString(projectPage?.body)}} />
                </SectionBlock>
              }
            <ProjectsList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects;