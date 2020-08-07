import React, { useEffect } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import HeroSlider from '../../components/base/HeroSlider';
import { useDispatch, useSelector } from 'react-redux';
import { getHomePage } from '../../store/slices/page/page-slice';
import { getServices } from '../../store/slices/services/services-slice';
import { getHomePageSelector } from '../../store/slices/page/page-selectors';
import { servicesResults } from '../../store/slices/services/services-selectors';
import { isValidArray } from '../../utils';
import { STATUS, HERO_SIZES  } from '../../constants';
import * as LABEL from '../../constants/labels';

// Components
import SectionBlock from '../../components/base/SectionBlock';
import Services from '../../components/base/Services';
import ProjectsList from '../../components/base/ProjectsList';

const Home = () => {
  const dispatchHomePage = useDispatch(getHomePage);
  const dispatchServices = useDispatch(getServices);
  const homePage = useSelector(getHomePageSelector);
  const services = useSelector(servicesResults);
  const isLoadedPage = homePage?.status === STATUS.SUCCESS;

  /**
   * Effect to get the home page data
   */
  useEffect(() => {
    if (!isLoadedPage) {
      dispatchHomePage(getHomePage());
    }
  }, [dispatchHomePage, isLoadedPage]);

  /**
   * Effect to get the services data
   */
  useEffect(() => {
    if (!isValidArray(services)) {
      dispatchServices(getServices());
    }
  }, [dispatchServices, services]);

  if (!isLoadedPage) return null;

  const {
    subtitle: subtitleHome,
    body: bodyHome,
  } = homePage;

  return (
    <>
      <HeroSlider />
      <div className="main-container">
        <div className="row">
          <div className="column large-12">
            <SectionBlock
              title={subtitleHome}
              size={HERO_SIZES.SMALL}
            >
              {bodyHome &&
                <div dangerouslySetInnerHTML={{__html: documentToHtmlString(bodyHome)}} />
              }
            </SectionBlock>
            <SectionBlock size={HERO_SIZES.MEDIUM}>
              <Services services={services} />
            </SectionBlock>
            <SectionBlock title={LABEL.LAST_PROJECTS}>
              <ProjectsList limit={6} />
            </SectionBlock>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;