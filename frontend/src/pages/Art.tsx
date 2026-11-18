import './Art.css'

function Art() {
  return (
    <section className="content-page art-page">
      <header className="art-header">
        <p className="page-eyebrow">Collected works · 01</p>
        <h1>A little corner of <em>creativity.</em></h1>
        <p className="art-intro">
          A collection of things I've made, moments I've noticed,
          and details that caught my eye. Outside of technology,
          art gives me another way to explore the world.
        </p>
      </header>

      <div className="art-journal">
        <div className="art-journal-topline">
          <span>FROM THE SKETCHBOOK</span>
          <span>FIELD NOTES / 001</span>
        </div>

        <div className="art-spread">
          <figure className="art-print">
            <div className="art-tape" aria-hidden="true">
            </div>

            <img
              src="/images/MothEyesArt.jpg"
              alt="Surreal moth artwork against a magical woodland background"
            />

            <figcaption>
              <span>01 — Surreal Moth Eyes</span>
              <span>Mixed media</span>
            </figcaption>
          </figure>

          <aside className="art-margin-notes">
            <p className="art-handwritten">A study in color & texture</p>

            <div className="art-note-divider">
              <span>✳</span>
            </div>

            <p>
              Inspired by the small details in nature:
              the patterns of wings, the texture of bark,
              and the colors hidden in the woods.
            </p>

            <p className="art-pencil-note">
              Notice the contrast between the warm orange
              and the deep greens.
            </p>

            <span className="art-note-number">— 01 / 01</span>
          </aside>
        </div>

        <footer className="art-journal-footer">
          <span>OBSERVE · EXPERIMENT · CREATE</span>
          <span>MORE PAGES TO COME ↗</span>
        </footer>
      </div>

      <div className="art-coming-soon">
        <span className="art-coming-number">02</span>
        <div>
          <h2>More from the sketchbook</h2>
          <p>
            More drawings, studies, and finished pieces will find
            their place here soon.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Art
