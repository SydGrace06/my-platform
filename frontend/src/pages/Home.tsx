import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center home-hero-row">
            <div className="col-12 col-lg-7 col-xl-6">
              <div className="home-intro">
                <p className="home-eyebrow">
                  <span className="eyebrow-line"></span>
                  Computer Science · Creative Work
                </p>

                <div className="home-intro-heading">
                    <h1>
                        Hi, I'm Sydney<span className="home-period">.</span>
                    </h1>

                    <figure className="home-portrait">
                        <img
                        src="/images/SelfPortrait.jpg"
                        alt="Pencil drawing self-portrait"
                        />
                        <figcaption>self-portrait · graphite</figcaption>
                    </figure>
                </div>

                <p className="home-description">
                  I'm a computer science student at Grove City College
                  exploring the intersection of technology, creativity,
                  cybersecurity, and artificial intelligence.
                </p>

                <p className="home-secondary">
                  A little bit of code, a little bit of curiosity,
                  and always something new to make.
                </p>

                <div className="home-actions">
                  <Link to="/work" className="home-button">
                    Explore my work
                    <span aria-hidden="true">↗</span>
                  </Link>

                  <Link to="/about" className="home-text-link">
                    More about me
                  </Link>
                </div>

                <div className="home-note">
                  <span className="home-note-mark">✳</span>
                  <span>Always learning, always creating.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
