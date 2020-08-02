import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Logo from "../../base/Logo";
import Nav from "../../base/Nav";
import { useSelector } from 'react-redux';
import { isHeaderSticky } from '../../../store/slices/page/page-selectors';

// Styles
import './Styles.scss';

const Header = () => {
  const isSticky = useSelector(isHeaderSticky);

  return (
    <header className={classnames(
      'main-header',
      {
        'is-sticky': isSticky,
      }
    )}>
      <div className="row">
        <div className="column small-4 medium-3">
          <Link className="main-logo" to="/">
            <Logo />
          </Link>
        </div>
        <div className="column small-8 medium-9">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
