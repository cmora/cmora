import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../base/Logo";
import Nav from "../../base/Nav";

// Styles
import './Styles.scss';

const Header = () => {
  return (
    <div className="main-header">
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
    </div>
  );
};

export default Header;
