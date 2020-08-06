import React from 'react';
import get from 'lodash/get';
import { STATUS } from '../../../constants';
import LoaderSpiner from '../LoaderSpiner';
import { isValidObject } from '../../../utils';
import SkillItem from './SkillItem';

import './Styles.scss';


const WorkExperience = ({
  status,
  skills,
}) => {
  const professional = get(skills, 'professional');
  const personal = get(skills, 'personal');

  return (
    <div className="skills-block">
      {status !== STATUS.SUCCESS || !isValidObject(skills) ? (
        <LoaderSpiner dark />
      ) : (
        <div className="skills-block__list">
          <div className="row">
            <div className="column small-12 medium-6">
              <h3>Professional Skills</h3>
              {professional.map(item => <SkillItem hey={item.id} {...item} />)}
            </div>
            <div className="column small-12 medium-6">
              <h3>Personal Skills</h3>
              {personal.map(item => <SkillItem hey={item.id} {...item} />)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkExperience;
