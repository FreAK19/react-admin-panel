import React from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.png';
import './Logo.less';

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <h1 className="logo__text--hidden">Some description about site</h1>
      <img src={logo} alt="description company" />
    </Link>
  </div>
);

export default Logo;
