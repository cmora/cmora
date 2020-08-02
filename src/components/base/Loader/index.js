import React from 'react';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { isPageLoading } from '../../../store/slices/page/page-selectors';

// Styles
import './Styles.scss';

const Loader = () => {
  const loading = useSelector(isPageLoading);

  return (
    <div
      className={classnames(
        'loading-spiner-holder',
        {
          'loading': loading,
        }
      )}
    >
      <div className="loader-left" />
      <div className="loader-right" />
    </div>
  );
};

export default Loader;
