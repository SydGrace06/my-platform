import { useState } from 'react'
import './Work.css'

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
  {
    id: '1',
    text: 'Navigation link is broken',
    kind: 'bug',
    priority: 'low',
    completed: false,
  },
  {
    id: '2',
    text: 'Add dark mode',
    kind: 'feature',
    priority: 'high',
    completed: false,
  },
]

function Work() {
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
          : report
      )
    )
  }

  const filteredReports = reports.filter((report) => {
    if (reportFilter === 'open') return !report.completed
    if (reportFilter === 'completed') return report.completed
    return true
  })

  return (
    <main className="work-page">
      {/* PROJECTS */}
      <section id="work" className="site-section">
        <p className="section-label">02 — Projects & experiments</p>
        <h2>Things I've made.</h2>
        <p className="section-intro">
          Software, experiments, and ideas brought to life.
        </p>

        <div className="row g-4 project-grid">
          <div className="col-12 col-md-6 col-xl-4">
            <article className="project-card h-100">
              <p className="project-label">Senior capstone</p>
              <h3>Bubbles</h3>
              <p>
                A location-based social app developed with Smith Micro
                using React Native and the SafePath SDK.
              </p>
            </article>
          </div>

          <div className="col-12 col-md-6 col-xl-4">
            <article className="project-card h-100">
              <p className="project-label">Information security</p>
              <h3>AI Organizational Navigation</h3>
              <p>
                A prototype exploring how AI could help people navigate
                organizational information.
              </p>
            </article>
          </div>

          <div className="col-12 col-md-6 col-xl-4">
            <article className="project-card h-100">
              <p className="project-label">Software engineering</p>
              <h3>More projects soon</h3>
              <p>
                A place for class projects, experiments, and other
                things I've built.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* BUGS & FEATURE REQUESTS */}
      <section id="reports" className="site-section reports-section">
        <p className="section-label">03 — Site feedback</p>

        <div className="report-board">
          <h2>Bugs & Feature Requests</h2>
          <p className="report-intro">
            Found something that needs fixing or have an idea? Leave a note.
          </p>

          <input
            type="text"
            value={newReportText}
            onChange={(event) => setNewReportText(event.target.value)}
            placeholder="Describe a bug or feature..."
            aria-label="New report description"
          />

          <select
            value={newReportKind}
            onChange={(event) =>
              setNewReportKind(event.target.value as ReportKind)
            }
            aria-label="Report type"
          >
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
          </select>

          <button
            type="button"
            className="submit-report"
            onClick={addReport}
          >
            Submit Report
          </button>

          <div className="report-filters" aria-label="Filter reports">
            <button
              type="button"
              onClick={() => setReportFilter('all')}
              aria-pressed={reportFilter === 'all'}
            >
              All
            </button>

            <button
              type="button"
              onClick={() => setReportFilter('open')}
              aria-pressed={reportFilter === 'open'}
            >
              Open
            </button>

            <button
              type="button"
              onClick={() => setReportFilter('completed')}
              aria-pressed={reportFilter === 'completed'}
            >
              Completed
            </button>
          </div>

          <ul className="report-list">
            {filteredReports.map((report) => (
              <li
                key={report.id}
                className={report.completed ? 'report-completed' : ''}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={report.completed}
                    onChange={() => toggleReportCompleted(report.id)}
                  />

                  <span className="report-text">{report.text}</span>
                </label>

                <span className="report-meta">
                  {report.kind} · {report.priority} ·{' '}
                  {report.completed ? 'completed' : 'open'}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Work
