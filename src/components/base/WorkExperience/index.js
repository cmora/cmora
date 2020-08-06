import React from 'react';
import { STATUS } from '../../../constants';
import LoaderSpiner from '../LoaderSpiner';
import { isValidArray } from '../../../utils';
import WorkExperienceItem from './WorkExperienceItem';

import './Styles.scss';


const WorkExperience = ({
  status,
  experience,
}) => {
  return (
    <div className="work-experience">
      {status !== STATUS.SUCCESS || !isValidArray(experience) ? (
        <LoaderSpiner dark />
      ) : (
        <div className="work-experience__list">
          {experience.map(item => (
            <WorkExperienceItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkExperience;
