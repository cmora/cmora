import React, { useEffect } from 'react';
import get from 'lodash/get';
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
  const isLoadedPage = get(projectPage, 'status') === STATUS.SUCCESS;


  /**
   * Effect to get the home page data
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
        loading={get(projectPage, 'status') === STATUS.LOADING}
        title={get(projectPage, 'subtitle')}
        image={get(projectPage, 'image')}
      />
      <div className="main-container">
        <div className="row">
          <div className="column large-12">
            <SectionBlock title={get(projectPage, 'title')} size="medium">
              {get(projectPage, 'body') &&
                <div dangerouslySetInnerHTML={{__html: documentToHtmlString(get(projectPage, 'body'))}} />
              }
            </SectionBlock>
            <ProjectsList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects;