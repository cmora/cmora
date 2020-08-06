import React, { useEffect } from 'react';
import get from 'lodash/get';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useDispatch, useSelector } from 'react-redux';
import { getAboutPage } from '../../store/slices/page/page-slice';
import { getAboutPageSelector } from '../../store/slices/page/page-selectors';
import { getWorkExperience } from '../../store/slices/experience/experience-slice';
import { getSkills } from '../../store/slices/skills/skills-slice';
import { experienceResults, experienceStatus } from '../../store/slices/experience/experience-selectors';
import { skillsResults, skillsStatus } from '../../store/slices/skills/skills-selectors';
import { STATUS, HERO_SIZES  } from '../../constants/index';
import { isValidArray, isValidObject } from '../../utils';

// Components
import Hero from '../../components/base/Hero';
import SectionBlock from '../../components/base/SectionBlock';
import WorkExperience from '../../components/base/WorkExperience';
import Skills from '../../components/base/Skills';

const About = () => {
  const dispatchHomePage = useDispatch(getAboutPage);
  const dispatchExperience = useDispatch(getWorkExperience);
  const dispatchSkills = useDispatch(getSkills);
  const aboutPage = useSelector(getAboutPageSelector);
  const workExperience = useSelector(experienceResults);
  const workExperienceStatus = useSelector(experienceStatus);
  const fullSkillsStatus = useSelector(skillsStatus);
  const fullSkillsResults = useSelector(skillsResults);
  const isLoadedPage = get(aboutPage, 'status') === STATUS.SUCCESS;


  /**
   * Effect to get the about page data
   */
  useEffect(() => {
    if (!isLoadedPage) {
      dispatchHomePage(getAboutPage());
    }
  }, [dispatchHomePage, isLoadedPage]);

  /**
   * Effect to get the experience data
   */
  useEffect(() => {
    if (!isValidArray(workExperience)) {
      dispatchExperience(getWorkExperience());
    }
  }, [dispatchExperience, workExperience]);

  /**
   * Effect to get the skills data
   */
  useEffect(() => {
    if (!isValidObject(fullSkillsResults)) {
      dispatchSkills(getSkills());
    }
  }, [dispatchSkills, fullSkillsResults]);

  return (
    <>
      <Hero
        size={HERO_SIZES.MEDIUM}
        loading={get(aboutPage, 'status') === STATUS.LOADING}
        title={get(aboutPage, 'subtitle')}
        image={get(aboutPage, 'image')}
      />
      <div className="main-container">
        <div className="row">
          <div className="column large-12">
            <SectionBlock title={get(aboutPage, 'title')} size="small">
              <div dangerouslySetInnerHTML={{__html: documentToHtmlString(get(aboutPage, 'body'))}} />
            </SectionBlock>
            <SectionBlock title="Work Experience">
              <WorkExperience status={workExperienceStatus} experience={workExperience} />
            </SectionBlock>
            <SectionBlock>
              <Skills status={fullSkillsStatus} skills={fullSkillsResults} />
            </SectionBlock>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;