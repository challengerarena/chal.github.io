import Image from 'next/image'
import './app/globals.css';

export default function Home() {
  return (
    <main className="site-content" id="wrapper">
    <div className="widget-area widger-area--before-loop">
      <div className="widget widget-carousel slick-slider">
        <article className="widget-carousel__item player bg-image bg--ph-03">
          <div className="player__subtitle h6">Welcome</div>
          <h1 className="player__title h3 color-primary">JULIE_NOIRE</h1>
          <div className="player__body">
            <div className="h5">To the <span className="color-primary">Xenovrese</span> team!</div>
          </div>
          <div className="player__thumbnail">
            <img src="assets/img/samples/team-info-page-player-photo-03.png" alt="" />
            <a href="team-player-3.html" className="more-info-link h6"><span className="add-icon" />More info</a>
          </div>
        </article>
        <article className="widget-carousel__item player bg-image bg--ph-05">
          <div className="player__subtitle h6">Congratulations!</div>
          <h1 className="player__title h3">Crazzzy_80</h1>
          <div className="player__body">
            <div className="h5 color-primary">Reached 10k twitch subs</div>
          </div>
          <div className="player__thumbnail">
            <img src="assets/img/samples/team-info-page-player-photo-04.png" alt="" />
            <a href="team-player-4.html" className="more-info-link h6"><span className="add-icon" />More info</a>
          </div>
        </article>
        <article className="widget-carousel__item player bg-image bg--ph-06">
          <div className="player__subtitle h6">Featured player</div>
          <h1 className="player__title h3 color-warning">G-Huntress</h1>
          <div className="player__body">
            <ul className="player__stats">
              <li className="counter">
                <div className="counter__number">28</div>
                <div className="counter__label">Games</div>
              </li>
              <li className="counter">
                <div className="counter__number">73</div>
                <div className="counter__label">Kills</div>
              </li>
              <li className="counter">
                <div className="counter__number">96</div>
                <div className="counter__label">Win %</div>
              </li>
            </ul>
          </div>
          <div className="player__thumbnail">
            <img src="assets/img/samples/team-info-page-player-photo-02.png" alt="" />
            <a href="team-player-2.html" className="more-info-link h6"><span className="add-icon" />More info</a>
          </div>
        </article>
      </div>
    </div>
    <div className="content blog-layout--style-1">
      <article className="post has-post-thumbnail ">
        <div className="post__thumbnail">
          <a href="blog-post.html"><img src="assets/img/samples/news-v1-post-img-01.jpg" alt="" /></a>
        </div>
        <div className="post__body">
          <div className="post__header">
            <ul className="post__cats list-unstyled">
              <li className="post__cats-item color-warning">
                <a href="#">Gaming</a>
              </li>
            </ul>
            <h2 className="post__title h4"><a href="blog-post.html">League of heroes presented a new character</a></h2>
            <ul className="post__meta list-unstyled">
              <li className="post__meta-item post__meta-item--date">
                <a href="#">August 15th, 2018</a>
              </li>
            </ul>
          </div>
          <div className="post__excerpt">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit mollitia modi, tempore, pariatur, error quaerat dolorum laborum, commodi laudantium soluta sit reiciendis praesentium dolore cumque ab.
          </div>
        </div>
      </article>
      <article className="post has-post-thumbnail ">
        <div className="post__thumbnail">
          <a href="blog-post.html"><img src="assets/img/samples/news-v1-post-img-02.jpg" alt="" /></a>
        </div>
        <div className="post__body">
          <div className="post__header">
            <ul className="post__cats list-unstyled">
              <li className="post__cats-item color-success">
                <a href="#">eSports</a>
              </li>
            </ul>
            <h2 className="post__title h4"><a href="blog-post.html">The Necromancers emerge victorious once more!</a></h2>
            <ul className="post__meta list-unstyled">
              <li className="post__meta-item post__meta-item--date">
                <a href="#">August 14th, 2018</a>
              </li>
            </ul>
          </div>
          <div className="post__excerpt">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit mollitia modi, tempore, pariatur, error quaerat dolorum laborum, commodi laudantium soluta sit reiciendis praesentium dolore cumque ab.
          </div>
        </div>
      </article>
      <article className="post has-post-thumbnail ">
        <div className="post__thumbnail">
          <a href="blog-post.html"><img src="assets/img/samples/news-v1-post-img-03.jpg" alt="" /></a>
        </div>
        <div className="post__body">
          <div className="post__header">
            <ul className="post__cats list-unstyled">
              <li className="post__cats-item color-success">
                <a href="#">eSports</a>
              </li>
            </ul>
            <h2 className="post__title h4"><a href="blog-post.html">Matt Rodgers talks about becoming a pro gamer</a></h2>
            <ul className="post__meta list-unstyled">
              <li className="post__meta-item post__meta-item--date">
                <a href="#">August 10th, 2018</a>
              </li>
            </ul>
          </div>
          <div className="post__excerpt">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit mollitia modi, tempore, pariatur, error quaerat dolorum laborum, commodi laudantium soluta sit reiciendis praesentium dolore cumque ab.
          </div>
        </div>
      </article>
      <article className="post has-post-thumbnail ">
        <div className="post__thumbnail">
          <a href="blog-post.html"><img src="assets/img/samples/news-v1-post-img-04.jpg" alt="" /></a>
        </div>
        <div className="post__body">
          <div className="post__header">
            <ul className="post__cats list-unstyled">
              <li className="post__cats-item color-warning">
                <a href="#">Gaming</a>
              </li>
            </ul>
            <h2 className="post__title h4"><a href="blog-post.html">Magimons will have a new class: Pyromancer</a></h2>
            <ul className="post__meta list-unstyled">
              <li className="post__meta-item post__meta-item--date">
                <a href="#">August 8th, 2018</a>
              </li>
            </ul>
          </div>
          <div className="post__excerpt">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit mollitia modi, tempore, pariatur, error quaerat dolorum laborum, commodi laudantium soluta sit reiciendis praesentium dolore cumque ab.
          </div>
        </div>
      </article>
      <article className="post has-post-thumbnail  post--video">
        <div className="post__thumbnail">
          <a href="https://www.youtube.com/watch?v=XE0fU9PCrWE" className="mp_iframe">
            <img src="assets/img/samples/news-v4-post-img-04.jpg" alt="" />
            <div className="post__thumbnail-icon">
              <span className="lightbox__icon">{/**/}</span>
            </div>
          </a>
        </div>
        <div className="post__body">
          <div className="post__header">
            <ul className="post__cats list-unstyled">
              <li className="post__cats-item color-danger">
                <a href="#">Videos</a>
              </li>
            </ul>
            <h2 className="post__title h4"><a href="blog-post.html">Jack shows a sneak peak of the new loh expansion</a></h2>
            <ul className="post__meta list-unstyled">
              <li className="post__meta-item post__meta-item--date">
                <a href="#">August 3rd, 2018</a>
              </li>
            </ul>
          </div>
          <div className="post__excerpt">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit mollitia modi, tempore, pariatur, error quaerat dolorum laborum, commodi laudantium soluta sit reiciendis praesentium dolore cumque ab.
          </div>
        </div>
      </article>
      <article className="post has-post-thumbnail ">
        <div className="post__thumbnail">
          <a href="blog-post.html"><img src="assets/img/samples/news-v4-post-img-06.jpg" alt="" /></a>
        </div>
        <div className="post__body">
          <div className="post__header">
            <ul className="post__cats list-unstyled">
              <li className="post__cats-item color-success">
                <a href="#">eSports</a>
              </li>
            </ul>
            <h2 className="post__title h4"><a href="blog-post.html">The team tested the new vr pod at 2018 gamexcon</a></h2>
            <ul className="post__meta list-unstyled">
              <li className="post__meta-item post__meta-item--date">
                <a href="#">July 24th, 2018</a>
              </li>
            </ul>
          </div>
          <div className="post__excerpt">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit mollitia modi, tempore, pariatur, error quaerat dolorum laborum, commodi laudantium soluta sit reiciendis praesentium dolore cumque ab.
          </div>
        </div>
      </article>
    </div>
  </main>
  
  )
}
