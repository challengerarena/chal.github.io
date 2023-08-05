import React from 'react';

const Header = () => {
  return (
    <header id="header" className="site-header site-header--bottom">
      <div className="header-logo header-logo--img">
        <a href="index.html">
          <img src="assets/img/logo.png" srcSet="assets/img/logo@2x.png 2x" alt="Necromancers" />
        </a>
      </div>
      <nav className="main-nav">
        <ul className="main-nav__list">
          <li className="active"><a href="home.html">Home</a></li>
          <li>
            <a href="#">Teams</a>
            <ul className="main-nav__sub">
              {/* Team Selections */}
            </ul>
          </li>
          {/* Other menu items */}
        </ul>
      </nav>
      {/* Other header elements */}
    </header>
  );
};

export default Header;
