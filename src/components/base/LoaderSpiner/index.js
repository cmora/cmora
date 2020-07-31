import React from 'react';


import './Styles.scss';

const LoaderSpiner = () => {
  return (
    <div className="loader-spiner__container">
      <div className="spinner">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    </div>
  );
};

export default LoaderSpiner;
