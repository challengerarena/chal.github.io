import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header id="header" className="site-header site-header--bottom">
      <div className="header-logo header-logo--img">
        <Link href="index.html">
          <a>
            <img src="/assets/img/logo.png" srcSet="/assets/img/logo@2x.png 2x" alt="Necromancers" />
          </a>
        </Link>
      </div>

      <nav className="main-nav">
        <ul className="main-nav__list">
          <li className="active"><Link href="home.html"><a>Home</a></Link></li>
          {/* Diğer menü öğeleri burada olacak */}
        </ul>
      </nav>

      <div className="header-actions">
        <div className="header-pagination">
          <a href="#" className="header-scroll-arrow header-scroll-arrow--left">
            {/* SVG İkon */}
          </a>
          <ol className="header-pagination--list">
            <li><a href="#">01</a></li>
            {/* ... Diğer sayfalama öğeleri ... */}
          </ol>
          <a href="#" className="header-scroll-arrow header-scroll-arrow--right">
            {/* SVG İkon */}
          </a>
        </div>
        <div className="header-filter-toggle">
          {/* SVG İkon */}
          <div className="filter-menu">
            <form action="#" className="filter-menu__form">
              <div className="filter-menu__select">
                <label className="filter-menu__label">Category</label>
                <select className="cs-select">
                  <option value="" selected>All Categories</option>
                  {/* ... Diğer seçenekler ... */}
                </select>
              </div>
              {/* ... Diğer filtre seçenekleri ... */}
              <div className="filter-menu__submit">
                <button type="submit" className="btn btn-primary btn-sm btn-block">Filter News</button>
              </div>
            </form>
          </div>
        </div>
        {/* ... Diğer header eylemleri ... */}
        <div className="header-account hide">
          <div className="header-account__avatar">
            <img src="/assets/img/samples/account-user-avatar.jpg" srcSet="/assets/img/samples/account-user-avatar@2x.jpg 2x" alt="" />
          </div>
          <div className="header-account__body">
            Hello!
            <div className="header-account__name">James Spiegel</div>
          </div>
          <div className="header-account__icon">
            <a href="shop-account-settings.html">
              {/* SVG İkon */}
            </a>
            <a href="login-register.html">
              {/* SVG İkon */}
            </a>
          </div>
        </div>
        <div className="header-menu-toggle">
          <div className="header-menu-toggle__inner">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
