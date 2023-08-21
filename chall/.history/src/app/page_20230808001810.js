import Image from 'next/image'

export default function Home() {
  return (
    <nav class="main-nav">
    <ul class="main-nav__list">
      <li class="active"><a href="home.html">Home</a></li>
      <li class="">
        <a href="#">Teams</a>
        <ul class="main-nav__sub">
          <li class="">
            <a href="#">Team Selections</a>
            <ul class="main-nav__sub main-nav__sub--dropup">
              <li class=""><a href="team-selection-1.html">Team Selection v1</a></li>
              <li class=""><a href="team-selection-2.html">Team Selection v2</a></li>
              <li class=""><a href="team-selection-3.html">Team Selection v3</a></li>
              <li class=""><a href="team-selection-4.html">Team Selection v4</a></li>
            </ul>
          </li>
          <li class="">
            <a href="team-overview.html">Team Overview</a>
            <ul class="main-nav__sub">
              <li class=""><a href="team-overview.html">Team Overview v1</a></li>
              <li class=""><a href="team-overview-2.html">Team Overview v2</a></li>
            </ul>
          </li>
          <li class=""><a href="team-player-1.html">Player Page</a></li>
          <li class=""><a href="management-and-staff.html">Staff Page</a></li>
          <li class=""><a href="staff-member.html">Staff Member<span class="badge badge-danger">New</span></a></li>
        </ul>
      </li>
      <li class=""><a href="#">Matches</a>
        <ul class="main-nav__sub">
          <li class=""><a href="matches-scores.html">Match Scores</a></li>
          <li class=""><a href="matches-upcoming.html">Upcoming Matches</a></li>
          <li class=""><a href="matches-standings.html">Standings</a></li>
          <li class=""><a href="#">Match Stats</a>
            <ul class="main-nav__sub">
              <li class=""><a href="matches-stats-1.html">Match Stats v1</a></li>
              <li class=""><a href="matches-stats-2.html">Match Stats v2</a></li>
              <li class=""><a href="matches-stats-3.html">Match Stats v3</a></li>
            </ul>
          </li>
          <li class="">
            <a href="#">Match Lineups</a>
            <ul class="main-nav__sub">
              <li class=""><a href="matches-lineups-1.html">Match Lineups v1</a></li>
              <li class=""><a href="matches-lineups-2.html">Match Lineups v2</a></li>
              <li class=""><a href="matches-lineups-3.html">Match Lineups v3</a></li>
            </ul>
          </li>
          <li class=""><a href="#">Match Overviews</a>
            <ul class="main-nav__sub">
              <li class=""><a href="matches-overview-1.html">Match Overview v1</a></li>
              <li class=""><a href="matches-overview-2.html">Match Overview v2</a></li>
            </ul>
          </li>
          <li class=""><a href="matches-replay.html">Match Replay</a></li>
        </ul>
      </li>
      <li class=""><a href="#">News</a>
        <ul class="main-nav__sub">
          <li class=""><a href="blog-1.html">News v1</a></li>
          <li class=""><a href="blog-2.html">News v2</a></li>
          <li class=""><a href="blog-3.html">News v3</a></li>
          <li class=""><a href="blog-4.html">News v4</a></li>
          <li class=""><a href="blog-classic.html">News Classic</a></li>
          <li class=""><a href="blog-post.html">Post Page</a></li>
        </ul>
      </li>
      <li><a href="#">Features</a>
        <div class="main-nav__megamenu">
          <div class="row">
            <div class="col-md-4">
              <h6 class="main-nav__title">Main Pages</h6>
              <div class="row">
                <ul class="col-md-4">
                  <li class=""><a href="index.html">Landing Image</a></li>
                  <li class=""><a href="index-2.html">Landing Video</a></li>
                  <li class=""><a href="blog-1.html">News v1</a></li>
                  <li class=""><a href="blog-2.html">News v2</a></li>
                  <li class=""><a href="blog-3.html">News v3</a></li>
                  <li class=""><a href="blog-4.html">News v4</a></li>
                  <li class=""><a href="blog-classic.html">News Classic</a></li>
                </ul>
                <ul class="col-md-4">
                  <li class=""><a href="shop-account-settings.html">Account Settings</a></li>
                  <li class=""><a href="shop-account-orders.html">Account Orders</a></li>
                  <li class=""><a href="login-register.html">Login & Register</a></li>
                  <li class=""><a href="features-about-us.html">About Us</a></li>
                  <li class=""><a href="management-and-staff.html">Staff</a></li>
                  <li class=""><a href="staff-member.html">Staff Member<span class="badge badge-danger">New</span></a></li>
                  <li class=""><a href="features-contact-us.html">Contact Us</a></li>
                  <li class=""><a href="features-faqs.html">FAQs</a></li>
                </ul>
                <ul class="col-md-4">
                  <li class=""><a href="streams-archive.html">Streams Page</a></li>
                  <li class=""><a href="partners.html">Our Partners</a></li>
                  <li class=""><a href="features-shortcodes.html">Shortcodes</a></li>
                  <li class=""><a href="features-typography.html">Typography</a></li>
                  <li class=""><a href="features-icons.html">Icons</a></li>
                  <li class=""><a href="features-404.html">404 Error<span class="badge badge-danger">New</span></a></li>
                  <li class=""><a href="features-bg-1.html">Backgrounds</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row">
                <h6 class="col-md-8 main-nav__title">Team Pages</h6>
                <h6 class="col-md-4 main-nav__title">Player Pages</h6>
              </div>
              <div class="row">
                <ul class="col-md-4">
                  <li class=""><a href="team-selection-1.html">Team Selection v1</a></li>
                  <li class=""><a href="team-selection-2.html">Team Selection v2</a></li>
                  <li class=""><a href="team-selection-3.html">Team Selection v3</a></li>
                  <li class=""><a href="team-selection-4.html">Team Selection v4</a></li>
                  <li class=""><a href="team-overview.html">Team Overview v1</a></li>
                  <li class=""><a href="team-overview-2.html">Team Overview v2</a></li>
                </ul>
                <ul class="col-md-4">
                  <li><a href="team-overview.html?slide=1">Team Statistics</a></li>
                  <li><a href="team-overview.html?slide=2">Team Achv</a></li>
                  <li><a href="team-overview.html?slide=3">Team Matches</a></li>
                </ul>
                <ul class="col-md-4">
                  <li><a href="team-player-1.html">Player Overview</a></li>
                  <li><a href="team-player-1.html?slide=1">Player Statistics</a></li>
                  <li><a href="team-player-1.html?slide=2">Player Achv</a></li>
                  <li><a href="team-player-1.html?slide=3">Player Hardware</a></li>
                  <li><a href="team-player-1.html?slide=4">Player Stream</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row">
                <h6 class="col-md-8 main-nav__title">Match Pages</h6>
                <h6 class="col-md-4 main-nav__title">Shop Pages</h6>
              </div>
              <div class="row">
                <ul class="col-md-4">
                  <li class=""><a href="matches-scores.html">Match Scores</a></li>
                  <li class=""><a href="matches-upcoming.html">Upcoming Matches</a></li>
                  <li class=""><a href="matches-standings.html">Standings</a></li>
                  <li class=""><a href="matches-overview-1.html">Overview v1</a></li>
                  <li class=""><a href="matches-overview-2.html">Overview v2</a></li>
                  <li class=""><a href="matches-stats-1.html">Match Stats v1</a></li>
                </ul>
                <ul class="col-md-4">
                  <li class=""><a href="matches-stats-2.html">Match Stats v2</a></li>
                  <li class=""><a href="matches-stats-3.html">Match Stats v3</a></li>
                  <li class=""><a href="matches-lineups-1.html">Match Lineups v1</a></li>
                  <li class=""><a href="matches-lineups-2.html">Match Lineups v2</a></li>
                  <li class=""><a href="matches-lineups-3.html">Match Lineups v3</a></li>
                  <li class=""><a href="matches-replay.html">Match Replay</a></li>
                </ul>
                <ul class="col-md-4">
                  <li class=""><a href="shop.html">Shop Page v1</a></li>
                  <li class=""><a href="shop-2.html">Shop Page v2</a></li>
                  <li class=""><a href="shop-product.html">Product Page</a></li>
                  <li class=""><a href="shop-checkout.html">Checkout Page</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="">
        <a href="#">Shop</a>
        <ul class="main-nav__sub">
          <li class=""><a href="shop.html">Shop Page v1</a></li>
          <li class=""><a href="shop-2.html">Shop Page v2</a></li>
          <li class=""><a href="shop-product.html">Product Page</a></li>
          <li class=""><a href="shop-checkout.html">Checkout Page</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  )
}
