import Image from 'next/image'

export default function Home() {
  return (
    <nav className="main-nav">
    <ul className="main-nav__list">
      <li className="active"><a href="home.html">Home</a></li>
      <li className>
        <a href="#">Teams</a>
        <ul className="main-nav__sub">
          <li className>
            <a href="#">Team Selections</a>
            <ul className="main-nav__sub main-nav__sub--dropup">
              <li className><a href="team-selection-1.html">Team Selection v1</a></li>
              <li className><a href="team-selection-2.html">Team Selection v2</a></li>
              <li className><a href="team-selection-3.html">Team Selection v3</a></li>
              <li className><a href="team-selection-4.html">Team Selection v4</a></li>
            </ul>
          </li>
          <li className>
            <a href="team-overview.html">Team Overview</a>
            <ul className="main-nav__sub">
              <li className><a href="team-overview.html">Team Overview v1</a></li>
              <li className><a href="team-overview-2.html">Team Overview v2</a></li>
            </ul>
          </li>
          <li className><a href="team-player-1.html">Player Page</a></li>
          <li className><a href="management-and-staff.html">Staff Page</a></li>
          <li className><a href="staff-member.html">Staff Member<span className="badge badge-danger">New</span></a></li>
        </ul>
      </li>
      <li className><a href="#">Matches</a>
        <ul className="main-nav__sub">
          <li className><a href="matches-scores.html">Match Scores</a></li>
          <li className><a href="matches-upcoming.html">Upcoming Matches</a></li>
          <li className><a href="matches-standings.html">Standings</a></li>
          <li className><a href="#">Match Stats</a>
            <ul className="main-nav__sub">
              <li className><a href="matches-stats-1.html">Match Stats v1</a></li>
              <li className><a href="matches-stats-2.html">Match Stats v2</a></li>
              <li className><a href="matches-stats-3.html">Match Stats v3</a></li>
            </ul>
          </li>
          <li className>
            <a href="#">Match Lineups</a>
            <ul className="main-nav__sub">
              <li className><a href="matches-lineups-1.html">Match Lineups v1</a></li>
              <li className><a href="matches-lineups-2.html">Match Lineups v2</a></li>
              <li className><a href="matches-lineups-3.html">Match Lineups v3</a></li>
            </ul>
          </li>
          <li className><a href="#">Match Overviews</a>
            <ul className="main-nav__sub">
              <li className><a href="matches-overview-1.html">Match Overview v1</a></li>
              <li className><a href="matches-overview-2.html">Match Overview v2</a></li>
            </ul>
          </li>
          <li className><a href="matches-replay.html">Match Replay</a></li>
        </ul>
      </li>
      <li className><a href="#">News</a>
        <ul className="main-nav__sub">
          <li className><a href="blog-1.html">News v1</a></li>
          <li className><a href="blog-2.html">News v2</a></li>
          <li className><a href="blog-3.html">News v3</a></li>
          <li className><a href="blog-4.html">News v4</a></li>
          <li className><a href="blog-classic.html">News Classic</a></li>
          <li className><a href="blog-post.html">Post Page</a></li>
        </ul>
      </li>
      <li><a href="#">Features</a>
        <div className="main-nav__megamenu">
          <div className="row">
            <div className="col-md-4">
              <h6 className="main-nav__title">Main Pages</h6>
              <div className="row">
                <ul className="col-md-4">
                  <li className><a href="index.html">Landing Image</a></li>
                  <li className><a href="index-2.html">Landing Video</a></li>
                  <li className><a href="blog-1.html">News v1</a></li>
                  <li className><a href="blog-2.html">News v2</a></li>
                  <li className><a href="blog-3.html">News v3</a></li>
                  <li className><a href="blog-4.html">News v4</a></li>
                  <li className><a href="blog-classic.html">News Classic</a></li>
                </ul>
                <ul className="col-md-4">
                  <li className><a href="shop-account-settings.html">Account Settings</a></li>
                  <li className><a href="shop-account-orders.html">Account Orders</a></li>
                  <li className><a href="login-register.html">Login &amp; Register</a></li>
                  <li className><a href="features-about-us.html">About Us</a></li>
                  <li className><a href="management-and-staff.html">Staff</a></li>
                  <li className><a href="staff-member.html">Staff Member<span className="badge badge-danger">New</span></a></li>
                  <li className><a href="features-contact-us.html">Contact Us</a></li>
                  <li className><a href="features-faqs.html">FAQs</a></li>
                </ul>
                <ul className="col-md-4">
                  <li className><a href="streams-archive.html">Streams Page</a></li>
                  <li className><a href="partners.html">Our Partners</a></li>
                  <li className><a href="features-shortcodes.html">Shortcodes</a></li>
                  <li className><a href="features-typography.html">Typography</a></li>
                  <li className><a href="features-icons.html">Icons</a></li>
                  <li className><a href="features-404.html">404 Error<span className="badge badge-danger">New</span></a></li>
                  <li className><a href="features-bg-1.html">Backgrounds</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <h6 className="col-md-8 main-nav__title">Team Pages</h6>
                <h6 className="col-md-4 main-nav__title">Player Pages</h6>
              </div>
              <div className="row">
                <ul className="col-md-4">
                  <li className><a href="team-selection-1.html">Team Selection v1</a></li>
                  <li className><a href="team-selection-2.html">Team Selection v2</a></li>
                  <li className><a href="team-selection-3.html">Team Selection v3</a></li>
                  <li className><a href="team-selection-4.html">Team Selection v4</a></li>
                  <li className><a href="team-overview.html">Team Overview v1</a></li>
                  <li className><a href="team-overview-2.html">Team Overview v2</a></li>
                </ul>
                <ul className="col-md-4">
                  <li><a href="team-overview.html?slide=1">Team Statistics</a></li>
                  <li><a href="team-overview.html?slide=2">Team Achv</a></li>
                  <li><a href="team-overview.html?slide=3">Team Matches</a></li>
                </ul>
                <ul className="col-md-4">
                  <li><a href="team-player-1.html">Player Overview</a></li>
                  <li><a href="team-player-1.html?slide=1">Player Statistics</a></li>
                  <li><a href="team-player-1.html?slide=2">Player Achv</a></li>
                  <li><a href="team-player-1.html?slide=3">Player Hardware</a></li>
                  <li><a href="team-player-1.html?slide=4">Player Stream</a></li>
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
                  <li className><a href="matches-scores.html">Match Scores</a></li>
                  <li className><a href="matches-upcoming.html">Upcoming Matches</a></li>
                  <li className><a href="matches-standings.html">Standings</a></li>
                  <li className><a href="matches-overview-1.html">Overview v1</a></li>
                  <li className><a href="matches-overview-2.html">Overview v2</a></li>
                  <li className><a href="matches-stats-1.html">Match Stats v1</a></li>
                </ul>
                <ul className="col-md-4">
                  <li className><a href="matches-stats-2.html">Match Stats v2</a></li>
                  <li className><a href="matches-stats-3.html">Match Stats v3</a></li>
                  <li className><a href="matches-lineups-1.html">Match Lineups v1</a></li>
                  <li className><a href="matches-lineups-2.html">Match Lineups v2</a></li>
                  <li className><a href="matches-lineups-3.html">Match Lineups v3</a></li>
                  <li className><a href="matches-replay.html">Match Replay</a></li>
                </ul>
                <ul className="col-md-4">
                  <li className><a href="shop.html">Shop Page v1</a></li>
                  <li className><a href="shop-2.html">Shop Page v2</a></li>
                  <li className><a href="shop-product.html">Product Page</a></li>
                  <li className><a href="shop-checkout.html">Checkout Page</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className>
        <a href="#">Shop</a>
        <ul className="main-nav__sub">
          <li className><a href="shop.html">Shop Page v1</a></li>
          <li className><a href="shop-2.html">Shop Page v2</a></li>
          <li className><a href="shop-product.html">Product Page</a></li>
          <li className><a href="shop-checkout.html">Checkout Page</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  
  )
}
