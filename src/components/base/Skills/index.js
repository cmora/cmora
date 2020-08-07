import React from 'react';
import { STATUS } from '../../../constants';
import LoaderSpiner from '../LoaderSpiner';
import { isValidObject } from '../../../utils';
import SkillItem from './SkillItem';

import './Styles.scss';


const Skills = ({
  status,
  skills,
}) => {
  const professional = skills?.professional;
  const personal = skills?.personal;

  return (
    <div className="skills-block">
      {status !== STATUS.SUCCESS || !isValidObject(skills) ? (
        <LoaderSpiner dark />
      ) : (
        <div className="skills-block__list">
          <div className="row">
            <div className="column small-12 medium-6">
              <h3>Professional Skills</h3>
              {professional.map(item => <SkillItem key={item.id} {...item} />)}
            </div>
            <div className="column small-12 medium-6">
              <h3>Personal Skills</h3>
              {personal.map(item => <SkillItem key={item.id} {...item} />)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
