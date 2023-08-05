import React from 'react';

const Header = () => {
  return (
    <header id="header" className="site-header site-header--bottom">
      <div className="header-logo header-logo--img">
        <a href="index.html">
          <img
            src="/assets/img/logo.png"
            srcSet="/assets/img/logo@2x.png 2x"
            alt="Necromancers"
          />
        </a>
      </div>

      <nav className="main-nav">
        <ul className="main-nav__list">
          {/* Ana sayfa */}
          <li className="active">
            <a href="home.html">Home</a>
          </li>

          {/* Teams */}
          <li className="">
            <a href="#">Teams</a>
            <ul className="main-nav__sub">
              <li className="">
                <a href="#">Team Selections</a>
                <ul className="main-nav__sub main-nav__sub--dropup">
                  <li className="">
                    <a href="team-selection-1.html">Team Selection v1</a>
                  </li>
                  <li className="">
                    <a href="team-selection-2.html">Team Selection v2</a>
                  </li>
                  {/* Diğer Team Selection sayfalarını buraya ekleyin */}
                </ul>
              </li>
              <li className="">
                <a href="team-overview.html">Team Overview</a>
                <ul className="main-nav__sub">
                  <li className="">
                    <a href="team-overview.html">Team Overview v1</a>
                  </li>
                  <li className="">
                    <a href="team-overview-2.html">Team Overview v2</a>
                  </li>
                  {/* Diğer Team Overview sayfalarını buraya ekleyin */}
                </ul>
              </li>
              {/* Diğer Teams alt sayfalarını buraya ekleyin */}
            </ul>
          </li>

          {/* Matches */}
          <li className="">
            <a href="#">Matches</a>
            <ul className="main-nav__sub">
              <li className="">
                <a href="matches-scores.html">Match Scores</a>
              </li>
              <li className="">
                <a href="matches-upcoming.html">Upcoming Matches</a>
              </li>
              {/* Diğer Matches alt sayfalarını buraya ekleyin */}
            </ul>
          </li>

          {/* News */}
          <li className="">
            <a href="#">News</a>
            <ul className="main-nav__sub">
              <li className="">
                <a href="blog-1.html">News v1</a>
              </li>
              <li className="">
                <a href="blog-2.html">News v2</a>
              </li>
              {/* Diğer News alt sayfalarını buraya ekleyin */}
            </ul>
          </li>

          {/* Features */}
          <li>
            <a href="#">Features</a>
            <div className="main-nav__megamenu">
              <div className="row">
                <div className="col-md-4">
                  <h6 className="main-nav__title">Main Pages</h6>
                  <div className="row">
                    <ul className="col-md-4">
                      <li className="">
                        <a href="index.html">Landing Image</a>
                      </li>
                      <li className="">
                        <a href="index-2.html">Landing Video</a>
                      </li>
                      <li className="">
                        <a href="blog-1.html">News v1</a>
                      </li>
                      <li className="">
                        <a href="blog-2.html">News v2</a>
                      </li>
                      {/* Diğer Main Pages sayfalarını buraya ekleyin */}
                    </ul>
                    {/* Diğer Main Pages sayfalarını buraya ekleyin */}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <h6 className="col-md-8 main-nav__title">Team Pages</h6>
                    <h6 className="col-md-4 main-nav__title">Player Pages</h6>
                  </div>
                  <div className="row">
                    <ul className="col-md-4">
                      <li className="">
                        <a href="team-selection-1.html">Team Selection v1</a>
                      </li>
                      <li className="">
                        <a href="team-selection-2.html">Team Selection v2</a>
                      </li>
                      {/* Diğer Team Pages sayfalarını buraya ekleyin */}
                    </ul>
                    <ul className="col-md-4">
                      {/* Diğer Team Pages sayfalarını buraya ekleyin */}
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <h6 className="col-md-8 main-nav__title">Match Pages</h6>
                    <h6 className="col-md-4 main-nav__title">Shop Pages</h6>
                  </div>
                  <div className="row">
                    <ul className="col-md-4">
                      <li className="">
                        <a href="matches-scores.html">Match Scores</a>
                      </li>
                      <li className="">
                        <a href="matches-upcoming.html">Upcoming Matches</a>
                      </li>
                      {/* Diğer Match Pages sayfalarını buraya ekleyin */}
                    </ul>
                    <ul className="col-md-4">
                      {/* Diğer Shop Pages sayfalarını buraya ekleyin */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Shop */}
          <li className="">
            <a href="#">Shop</a>
            <ul className="main-nav__sub">
              <li className="">
                <a href="shop.html">Shop Page v1</a>
              </li>
              <li className="">
                <a href="shop-2.html">Shop Page v2</a>
              </li>
              {/* Diğer Shop sayfalarını buraya ekleyin */}
            </ul>
          </li>
        </ul>
      </nav>

      {/* Diğer header-actions içeriğini buraya ekleyin */}

    </header>
  );
};

export default Header;
