import './About.css'

function About() {
  return (
    <section className="content-page about-page">
      <p className="page-eyebrow">A little about me</p>
      <h1>Curious by nature, <em>creative by design.</em></h1>

      <div className="about-intro">
        <div className="about-copy">
          <p>
            I'm Sydney, a computer science student at Grove City College
            with minors in cybersecurity and artificial intelligence
            and machine learning.
          </p>

          <p>
            I enjoy exploring how technology can solve real problems.
            My interests range from software development and security
            to thoughtful applications of AI. I'm especially interested
            in the ways people interact with technology and how those
            experiences can be made more useful and intuitive.
          </p>

          <p>
            Outside of coding, I enjoy making art, playing golf, and
            finding creative ways to bring ideas to life. I like work
            that combines analytical thinking with a little imagination.
          </p>
        </div>

        <aside className="about-note">
          <span className="note-label">A few things I enjoy</span>
          <ul>
            <li>Building things that are useful</li>
            <li>Learning how systems work</li>
            <li>Art and visual storytelling</li>
            <li>Golf and time outdoors</li>
            <li>Creative problem-solving</li>
          </ul>
        </aside>
      </div>

      <div className="about-bottom">
        <p className="section-kicker">What I'm exploring</p>
        <div className="interest-list">
          <span>Cybersecurity</span>
          <span>Artificial Intelligence</span>
          <span>Software Development</span>
          <span>User Experience</span>
        </div>
      </div>
    </section>
  )
}

export default About
