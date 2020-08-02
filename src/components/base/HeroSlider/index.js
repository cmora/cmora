import React, { useEffect } from 'react';
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import get from 'lodash/get';
import { featuredProjects } from '../../../store/slices/projects/projects-slice';
import { featuredProjectsResults, featuredProjectsStatus } from '../../../store/slices/projects/projects-selectors';
import HeroContainer from '../../base/HeroContainer';
import { STATUS, HERO_SIZES } from '../../../constants';
import HeroSliderItem from './HeroSliderItem';

import './Styles.scss';

const HeroSlider = () => {
  const dispatch = useDispatch(featuredProjects);
  const status = useSelector(featuredProjectsStatus);
  const projects = useSelector(featuredProjectsResults);

  useEffect(() => {
    if (projects.length <= 0) {
      dispatch(featuredProjects());
    }
  }, [dispatch, projects]);

  const SLIDER_SETTINGS = {
    arrows: false,
    customPaging: (i) => {
      const item = projects[i];
      return (
        <div>
          <span>{ get(item, 'client') }</span>
        </div>
      );
    },
    dots: true,
    fade: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 1200,
  };

  return (
    <HeroContainer
      loading={status === STATUS.LOADING}
      size={HERO_SIZES.LARGE}
    >
      <Slider className="slider-wrapper" {...SLIDER_SETTINGS}>
        {projects.map(item => <HeroSliderItem key={get(item, 'title')} {...item} />)}
      </Slider>
    </HeroContainer>
  );
};

export default HeroSlider;
