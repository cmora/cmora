import React, { useEffect } from 'react';
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { featuredProjects } from '../../../store/slices/projects/projects-slice';
import { featuredProjectsResults, featuredProjectsStatus } from '../../../store/slices/projects/projects-selectors';
import HeroContainer from '../../base/HeroContainer';
import { STATUS, HERO_SIZES } from '../../../constants';

const HeroSlider = ({
  slides
}) => {
  const dispatch = useDispatch(featuredProjects);
  const status = useSelector(featuredProjectsStatus);
  const projects = useSelector(featuredProjectsResults);
  console.log(status, projects);

  useEffect(() => {
    dispatch(featuredProjects());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <HeroContainer
      loading={status === STATUS.LOADING}
      size={HERO_SIZES.LARGE}
    >
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </HeroContainer>
  );
};

export default HeroSlider;
