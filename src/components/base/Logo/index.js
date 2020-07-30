import React from 'react';

const Logo = ({ size = 'small' }) => {
  return (
    <svg className={`size-${size}`} viewBox="0 0 79 37" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="M25.388 31.015l-3.886 5.677c-.915.12-1.77.18-2.564.18-3.766 0-7.229-.98-10.39-2.942-2.987-1.874-5.241-4.395-6.76-7.56A17.983 17.983 0 010 18.475c0-3.664.985-7.027 2.953-10.089 1.83-2.872 4.344-5.049 7.539-6.528A19.417 19.417 0 0118.834 0c4.283 0 8.178 1.42 11.684 4.257l-5.181 7.56c-2.073-1.84-4.37-2.76-6.892-2.76-2.763 0-5.043.938-6.84 2.813-1.692 1.771-2.538 3.904-2.538 6.398 0 1.858.535 3.596 1.606 5.213 1.796 2.717 4.283 4.154 7.461 4.309L36.528.723h8.835M78.693 36.172h-9.067V15.581L55.921 36.172h-7.098V15.22L34.937 36.172h-9.896L48.823.744h8.419v19.094L70.274.744h8.419z"/></g></svg>
  );
};

export default Logo;