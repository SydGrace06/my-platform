import './Resume.css'

function Resume() {
  return (
    <section className="content-page resume-page">
      <p className="page-eyebrow">Experience & education</p>

      <div className="resume-heading">
        <div>
          <h1>My <em>résumé.</em></h1>
          <p className="resume-intro">
            A snapshot of what I've learned, built, and worked on so far.
          </p>
        </div>

        <a
          className="resume-download"
          href="/Goettel_Sydney_Resume10.2026.pdf"
          target="_blank"
          rel="noreferrer"
        >
          View full résumé ↗
        </a>
      </div>

      <div className="resume-section">
        <h2>Education</h2>
        <article className="resume-entry">
          <div className="resume-entry-heading">
            <h3>Grove City College</h3>
            <span>Expected May 2027</span>
          </div>
          <p className="resume-role">B.S. in Computer Science</p>
          <p>Minors in Cybersecurity and Artificial Intelligence & Machine Learning</p>
          <p className="resume-detail">
            GPA: 4.0 / 4.0 · Dean's List with High Distinction
          </p>
        </article>
      </div>

      <div className="resume-section">
        <h2>Experience</h2>

        <article className="resume-entry">
          <div className="resume-entry-heading">
            <h3>Constellation Brands</h3>
            <span>May – August 2026</span>
          </div>
          <p className="resume-role">Information Security Intern</p>
          <ul>
            <li>
              Built Power BI and Excel dashboards analyzing phishing,
              vulnerability, and governance metrics.
            </li>
            <li>
              Coordinated organization-wide phishing campaigns and
              developed security awareness training.
            </li>
            <li>
              Collaborated on an organizational navigation AI agent,
              including stakeholder interviews, prompt engineering,
              prototype testing, and presentations.
            </li>
          </ul>
        </article>

        <article className="resume-entry">
          <div className="resume-entry-heading">
            <h3>Grove City College TLC</h3>
            <span>August 2025 – Present</span>
          </div>
          <p className="resume-role">Computer Help Desk Assistant</p>
          <ul>
            <li>
              Provide technical support for students and faculty,
              troubleshooting hardware, software, malware, printing,
              MFA, and password issues.
            </li>
            <li>
              Resolved more than 200 support tickets while following
              established security procedures.
            </li>
          </ul>
        </article>

        <article className="resume-entry">
          <div className="resume-entry-heading">
            <h3>Mill Creek Golf Club</h3>
            <span>April 2023 – Present</span>
          </div>
          <p className="resume-role">Golf Shop Attendant · Seasonal</p>
          <ul>
            <li>
              Assist customers, manage tee times and leagues, and
              coordinate daily shop operations.
            </li>
            <li>
              Help oversee retail and outdoor areas while working
              alongside other employees.
            </li>
          </ul>
        </article>
      </div>

      <div className="resume-section">
        <h2>Selected projects</h2>

        <article className="resume-entry">
          <div className="resume-entry-heading">
            <h3>Phishing Competition & Security Awareness</h3>
            <span>2026</span>
          </div>
          <p>
            Independently developed multilingual phishing simulations
            and training using KnowBe4, with scoring and leaderboard
            mechanisms to encourage participation.
          </p>
        </article>

        <article className="resume-entry">
          <div className="resume-entry-heading">
            <h3>ARQ Networking Protocols</h3>
            <span>2025</span>
          </div>
          <p>
            Developed Java sender and receiver programs implementing
            Stop-and-Wait and Selective Repeat ARQ, reducing large file
            transfer latency from 27 minutes to under 3 seconds.
          </p>
        </article>
      </div>

      <div className="resume-section">
        <h2>Technical skills</h2>
        <div className="resume-skills">
          <div>
            <h3>Languages & development</h3>
            <p>Java, Python, C, SQL, MongoDB, JavaScript, HTML, CSS</p>
          </div>
          <div>
            <h3>Security & platforms</h3>
            <p>KnowBe4, Nucleus, Packet Tracer, Articulate Rise 360</p>
          </div>
          <div>
            <h3>Tools & software</h3>
            <p>Linux, Windows, Microsoft 365, Excel, Git, Jira, Power BI, Gradle, Javalin, Flask</p>
          </div>
          <div>
            <h3>Certification</h3>
            <p>ISC2 Certified in Cybersecurity (CC)</p>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h2>Leadership & involvement</h2>
        <article className="resume-entry">
          <div className="resume-entry-heading">
            <h3>Grove City College Women's Varsity Golf</h3>
            <span>August 2024 – Present</span>
          </div>
          <p className="resume-role">NCAA DIII Athlete · Team Chaplain</p>
          <p>
            Balance academics and athletics while hosting weekly Bible
            studies and devotionals throughout the year.
          </p>
        </article>

        <article className="resume-entry">
          <div className="resume-entry-heading">
            <h3>Phi Sigma Chi Sorority</h3>
            <span>January 2025 – Present</span>
          </div>
          <p className="resume-role">Secretary & Chaplain</p>
          <p>
            Coordinate meeting notes, attendance, fundraising events,
            and weekly devotionals.
          </p>
        </article>

        <article className="resume-entry">
          <div className="resume-entry-heading">
            <h3>Women for Computer Science Club</h3>
            <span>September 2025 – Present</span>
          </div>
          <p>
            Participate in lectures, networking events, and programming
            activities with fellow computer science students.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Resume
