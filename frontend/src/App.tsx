import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState } from 'react'

type LinkItem = {
  label: string
  href: string
}

const profile = {
  name: 'Sydney Goettel',
  bio: `I'm a computer science student with minors in Cybersecurity and AI & Machine Learning. I enjoy solving problems, learning new technologies, and turning ideas into practical software solutions. Through coursework and software engineering projects, I've gained experience with Java, React, databases, testing, and collaborative development using GitHub and Agile methods. I also completed an Information Security internship at Constellation Brands, where I worked on security initiatives and helped prototype an AI-powered organizational navigation tool. For my senior capstone, I'm working with Smith Micro to develop Bubbles, a location-based social media application using React Native and the SafePath SDK.`,
  focus: ['Senior Capstone Production Platform', 'Smith Micro: Bubbles App'],
  skills: ['Java', 'Python', 'JavaScript', 'SQL', 'Linux', 'Git', 'Power BI'],
  links: [
    { label: 'GitHub', href: 'https://github.com/sydgrace06' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sydney-goettel' },
  ] as LinkItem[],
}

type ReportKind = 'bug' | 'feature'
type Priority = 'new' | 'urgent' | 'high' | 'medium' | 'low'
type ReportFilter = 'all' | 'open' | 'completed'
type Report = {
  id: string
  text: string
  kind: ReportKind
  priority: Priority
  completed: boolean
}

const initialReports: Report[] = [
  { id: '1', text: 'Navigation link is broken', kind: 'bug', priority: 'low', completed: false },
  { id: '2', text: 'Add dark mode', kind: 'feature', priority: 'high', completed: false },
]


function App() {
  const [reports, setReports] = useState<Report[]>(initialReports)
  const [newReportText, setNewReportText] = useState('')
  const [newReportKind, setNewReportKind] = useState<ReportKind>('bug')
  const [reportFilter, setReportFilter] = useState<ReportFilter>('all')


  function addReport() {
    const text = newReportText.trim()
    if (!text) return

    const newReport: Report = {
      id: crypto.randomUUID(),
      text,
      kind: newReportKind,
      priority: 'new',
      completed: false,
    }

    setReports((previousReports) => [...previousReports, newReport])
    setNewReportText('')
    setNewReportKind('bug')
  }


  function toggleReportCompleted(reportId: string) {
    setReports((previousReports) =>
      previousReports.map((report) =>
        report.id === reportId
          ? { ...report, completed: !report.completed }
          : report,
      )
    )
  }


  const filteredReports = reports.filter((report) => {
    if (reportFilter === 'open') return !report.completed
    if (reportFilter === 'completed') return report.completed
    return true
  })


  return (
    <main className="landing">
      <div className="page-shell">
        <nav className="site-nav">
          <a className="site-name" href="#home">SYDNEY GOETTEL</a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#art">Art</a>
            <a href="#resume">Résumé</a>
          </div>
        </nav>


        {/* HOME */}
        <section id="home" className="site-section hero">
          <div className="container-fluid px-0">
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-7">
                <div className="hero-copy">
                  <p className="section-label">Computer science · Art · Curiosity</p>
                  <h1>
                    A little bit of logic.
                    <br />
                    A little bit of imagination.
                  </h1>
                  <p className="hero-description">
                    I'm Sydney — a computer science student, artist, and creative problem solver interested in building things that are useful, thoughtful, and a little unexpected.
                  </p>
                  <div className="hero-links">
                    <a href="#work">Explore my work ↓</a>
                    <a href="#about">A little about me ↗</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <div className="hero-art">
                  <div className="art-paper">
                    <p className="art-label">STUDY Nº 01 / METAMORPHOSIS</p>
                    <div className="art-placeholder" aria-label="Placeholder for original butterfly artwork">
                      <span>butterfly</span>
                      <span>transformation</span>
                      <span>growth</span>
                    </div>
                    <p className="art-caption">A visual investigation into change, growth, and becoming.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* WORK */}
        <section id="work" className="site-section">
          <p className="section-label">02 — Projects & experiments</p>
          <h2>Things I've made.</h2>
          <p className="section-intro">Software, experiments, and ideas brought to life.</p>

          <div className="row g-4 project-grid">
            <div className="col-12 col-md-6 col-xl-4">
              <article className="project-card h-100">
                <p className="project-label">Senior capstone</p>
                <h3>Bubbles</h3>
                <p>A location-based social app developed with Smith Micro using React Native and the SafePath SDK.</p>
              </article>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <article className="project-card h-100">
                <p className="project-label">Information security</p>
                <h3>AI Organizational Navigation</h3>
                <p>A prototype exploring how AI could help people navigate organizational information.</p>
              </article>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <article className="project-card h-100">
                <p className="project-label">Software engineering</p>
                <h3>More projects soon</h3>
                <p>A place for class projects, experiments, and other things I've built.</p>
              </article>
            </div>
          </div>
        </section>


        {/* ABOUT */}
        <section id="about" className="site-section">
          <p className="section-label">03 — A little about me</p>
          <h2>Behind the work.</h2>
          <p className="about-copy">{profile.bio}</p>
          <div className="social-links">
            {profile.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label} ↗
              </a>
            ))}
          </div>
        </section>


        {/* ART */}
        <section id="art" className="site-section">
          <p className="section-label">04 — Art & studies</p>
          <h2>A collection of visual explorations.</h2>
          <p className="section-intro">Artwork, sketchbooks, investigations, and experiments.</p>
          <div className="art-note">
            <span className="art-note-label">IN PROGRESS</span>
            <p>My AP Art investigation into metamorphosis will be featured here, alongside other paintings, drawings, and visual experiments.</p>
          </div>
        </section>


        {/* RÉSUMÉ */}
        <section id="resume" className="site-section">
          <p className="section-label">05 — Experience & education</p>
          <h2>Where I've been & what I've learned.</h2>
          <div className="row g-4 resume-grid">
            <div className="col-12 col-md-6">
              <div className="resume-block h-100">
                <p className="project-label">Education</p>
                <h3>Grove City College</h3>
                <p>Computer Science</p>
                <p>Minors: Cybersecurity and AI & Machine Learning</p>
                <p>Expected graduation: May 2027</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="resume-block h-100">
                <p className="project-label">Technical skills</p>
                <ul className="skill-list">
                  {profile.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <div className="resume-block experience-block">
            <p className="project-label">Current focus</p>
            <ul className="focus-list">
              {profile.focus.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>


        {/* FEEDBACK / REPORT BOARD */}
        <section id="reports" className="site-section reports-section">
          <p className="section-label">06 — Site feedback</p>
          <div className="report-board">
            <h2>Bugs & Feature Requests</h2>
            <p className="report-intro">Found something that needs fixing or have an idea? Leave a note.</p>

            <input
              type="text"
              value={newReportText}
              onChange={(event) => setNewReportText(event.target.value)}
              placeholder="Describe a bug or feature..."
              aria-label="New report description"
            />
            <select
              value={newReportKind}
              onChange={(event) => setNewReportKind(event.target.value as ReportKind)}
              aria-label="Report type"
            >
              <option value="bug">Bug</option>
              <option value="feature">Feature</option>
            </select>
            <button type="button" className="submit-report" onClick={addReport}>Submit Report</button>

            <div className="report-filters" aria-label="Filter reports">
              <button type="button" onClick={() => setReportFilter('all')} aria-pressed={reportFilter === 'all'}>All</button>
              <button type="button" onClick={() => setReportFilter('open')} aria-pressed={reportFilter === 'open'}>Open</button>
              <button type="button" onClick={() => setReportFilter('completed')} aria-pressed={reportFilter === 'completed'}>Completed</button>
            </div>

            <ul className="report-list">
              {filteredReports.map((report) => (
                <li key={report.id} className={report.completed ? 'report-completed' : ''}>
                  <label>
                    <input
                      type="checkbox"
                      checked={report.completed}
                      onChange={() => toggleReportCompleted(report.id)}
                    />
                    <span className="report-text">{report.text}</span>
                  </label>
                  <span className="report-meta">{report.kind} · {report.priority} · {report.completed ? 'completed' : 'open'}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>


        <footer className="site-footer">
          <p>Made with curiosity, code, and a little creativity.</p>
          <div className="social-links">
            {profile.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  )
}


export default App