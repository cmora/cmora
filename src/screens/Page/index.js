import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isLoading, loaded } from '../../store/slices/loader/loader-slice';

const Page = ({
  children
}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(loaded());
    }, 1500);
    return () => {
      dispatch(isLoading());
    }
  });

  return (
    <div>
      { children }
    </div>
  )
}

export default Page;