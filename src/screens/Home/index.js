import React, { useEffect } from 'react';
import get from 'lodash/get';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import HeroSlider from '../../components/base/HeroSlider';
import { useDispatch, useSelector } from 'react-redux';
import { getHomePage } from '../../store/slices/page/page-slice';
import { getServices } from '../../store/slices/services/services-slice';
import { getHomePageSelector } from '../../store/slices/page/page-selectors';
import { servicesResults, servicesStatus as servicesGetStatus } from '../../store/slices/services/services-selectors';
import { STATUS  } from '../../constants';

// Components
import SectionBlock from '../../components/base/SectionBlock';
import Services from '../../components/base/Services';

const Home = () => {
  const dispatchHomePage = useDispatch(getHomePage);
  const dispatchServices = useDispatch(getServices);
  const homePage = useSelector(getHomePageSelector);
  const services = useSelector(servicesResults);
  const servicesStatus = useSelector(servicesGetStatus);
  const isLoadedPage = get(homePage, 'status') === STATUS.SUCCESS;


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
    if (servicesStatus !== STATUS.SUCCESS) {
      dispatchServices(getServices());
    }
  }, [dispatchServices, servicesStatus]);

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
              size="small"
            >
              {bodyHome &&
                <>
                  <div dangerouslySetInnerHTML={{__html: documentToHtmlString(bodyHome)}} />
                </>
              }
            </SectionBlock>
            <SectionBlock
              size="medium"
            >
              <Services services={services} />
            </SectionBlock>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;