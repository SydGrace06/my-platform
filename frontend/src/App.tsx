import './App.css'

type LinkItem = {
  label: string
  href: string
}

type Profile = {
  name: string
  major: string
  minors: string[]
  school: string
  gradDate: string
  tagline: string
  bio: string
  focus: string[]
  skills: string[]
  links: LinkItem[]
}

const profile: Profile = {
  name: 'Sydney Goettel',
  major: 'Computer Science',
  minors: ['Cybersecurity', 'AI and Machine Learning'],
  school: 'Grove City College',
  gradDate: 'May 2027',
  tagline: '',
  bio: 'Hi, I’m Sydney Goettel, I am a 4.0 Computer Science student with minors in both Cybersecurity and AI & Machine Learning. '
    + 'I enjoy solving problems, learning new technologies, and turning ideas into practical software solutions. Through my coursework and a full-semester software engineering project, I’ve gained experience with Java, React, databases, testing, and collaborative development using GitHub and Agile methods. '
    + 'I also completed an Information Security internship at Constellation Brands, where I worked on security initiatives and helped prototype an AI-powered organizational navigation tool. '
    + 'For my senior capstone, I’m working with Smith Micro to develop Bubbles, a location-based social media application using React Native and the SafePath SDK. ' 
    + 'I’m excited to continue growing as a developer while building technology that makes a meaningful impact.',
  focus: ['Senior Capstone Production Platform', 'Smith Micro: Bubbles App'],
  skills: ['Java', 'Python', 'JavaScript', 'SQL', 'Linux', 'Git', 'Power BI'],
  links: [
    { label: 'GitHub', href: 'https://github.com/sydgrace06' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sydney-goettel' },
  ],
}

function getInitials(fullName: string): string {
  return fullName
    .split(' ')
    .map((part) => part[0])
    .join('')
}

function App() {
  return (
    <main className="landing">
      <section className="card">
        <div className="avatar" aria-hidden="true">
          {getInitials(profile.name)}
        </div>

        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>

        <p className="major">
          {profile.major} · {profile.school} · {profile.gradDate}
        </p>
        <p className="minors">Minors: {profile.minors.join(' & ')}</p>

        <p className="bio">{profile.bio}</p>

        <ul className="chips" aria-label="Skills">
          {profile.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <div className="links">
          {profile.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>

        <div className="panels">
          <div className="panel">
            <h3>Current Work</h3>
            <ul className="focus-list">
              {profile.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <h3>Art Portfolio</h3>
            <p>My art portfolio is coming soon.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App