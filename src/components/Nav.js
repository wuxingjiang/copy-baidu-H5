// 导航条
require('!style!css!sass!styles/nav.scss')
import React from 'react';
import { Link , IndexLink} from 'react-router';

// logo
const logoImg = require('../images/logo.png');

class BrandLogo extends React.Component {
  render() {
    return(
      <div className="logo">
          <a className="navbar-brand">
            <img src = {logoImg}/>
          </a>
      </div>
    );
  }
}

class NavLink extends React.Component {

  render() {
    return(
        <ul className="header-nav">
          <li><IndexLink to='/'>创意模板</IndexLink></li>
          <li><Link to="/AboutUs">用户作品</Link></li>
          <li><Link to="/Experience">帮助文档</Link></li>
          <li><Link to="/Note">社区</Link></li>
          <li><Link to="/Note">百度账号登录</Link></li>
        </ul>
    );
  }
}

class Bar extends React.Component {
  render() {
    return(
      <button className="navbar-toggle">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    );
  }
}

class Nav extends React.Component {
  render() {

    return(
      <nav className="index-header">
        <BrandLogo/>
        <NavLink/>
        <Bar/>
      </nav>
    );
  }
}

export default Nav;
