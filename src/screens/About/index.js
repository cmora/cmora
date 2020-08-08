import React, { useEffect } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useDispatch, useSelector } from 'react-redux';
import { getAboutPage } from '../../store/slices/page/page-slice';
import { getAboutPageSelector } from '../../store/slices/page/page-selectors';
import { getWorkExperience } from '../../store/slices/experience/experience-slice';
import { getSkills } from '../../store/slices/skills/skills-slice';
import { experienceResults, experienceStatus } from '../../store/slices/experience/experience-selectors';
import { skillsResults, skillsStatus } from '../../store/slices/skills/skills-selectors';
import { STATUS, HERO_SIZES, RESUME_FILE  } from '../../constants/index';
import { isValidArray, isValidObject } from '../../utils';
import * as LABEL from '../../constants/labels';

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
  const isLoadedPage = aboutPage?.status === STATUS.SUCCESS;


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

  console.log(aboutPage);

  return (
    <>
      <Hero
        size={HERO_SIZES.MEDIUM}
        loading={aboutPage?.status === STATUS.LOADING}
        title={aboutPage?.subtitle}
        image={aboutPage?.image}
      />
      <div className="main-container">
        <div className="row">
          <div className="column large-12">
            <SectionBlock title={aboutPage?.title} size={HERO_SIZES.SMALL}>
              <div dangerouslySetInnerHTML={{__html: documentToHtmlString(aboutPage?.body)}} />
            </SectionBlock>
            <SectionBlock title={LABEL.WORK_EXPERIENCE}>
              <WorkExperience status={workExperienceStatus} experience={workExperience} />
            </SectionBlock>
            <SectionBlock>
              <Skills status={fullSkillsStatus} skills={fullSkillsResults} />
            </SectionBlock>
            <SectionBlock
              size={HERO_SIZES.SMALL}
              centered
            >
              <a
                className="button secondary"
                data-text={LABEL.DOWNLOAD_MY_RESUME}
                href={RESUME_FILE}
                rel="noopener noreferrer"
                target="_blank"
              >
                {LABEL.DOWNLOAD_MY_RESUME}
              </a>
            </SectionBlock>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;