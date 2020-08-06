import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { loaded } from '../../store/slices/page/page-slice';

const Page = ({
  children,
}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
    setTimeout(()=> {
      dispatch(loaded());
    }, 500);
  });

  return (
    <main className="wrapper-page">
      { children }
    </main>
  )
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;