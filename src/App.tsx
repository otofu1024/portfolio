import './App.css'

const skills = [
  'Python',
  'Rust',
  'Docker',
  'Git',
]

const projects = [
  {
    title: 'Portfolio Website',
    description:
      '自己紹介、スキル、制作物を1ページにまとめたシンプルなポートフォリオサイトです。',
    tech: 'TypeScript, React, Vite',
    link: '#',
  },
  {
    title: 'Task Memo App',
    description:
      '日々のタスクやメモを整理するための小さなWebアプリケーションです。',
    tech: 'React, CSS',
    link: '#',
  },
  {
    title: 'Study Notes',
    description:
      '学習した内容を分野ごとに記録し、あとから見返しやすくまとめるサイトです。',
    tech: 'HTML, CSS, JavaScript',
    link: '#',
  },
]

function App() {
  return (
    <main className="site">
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Portfolio</p>
        <h1 id="hero-title">Your Name</h1>
        <p className="lead">
          TypeScriptとReactを中心に、使いやすく読みやすいWebサイトを作っています。
        </p>
        <a className="text-link" href="#contact">
          Contactへ
        </a>
      </section>

      <section className="section" aria-labelledby="about-title">
        <h2 id="about-title">About</h2>
        <p>
          フロントエンド開発を学びながら、UIの構造やコンポーネント設計に関心を持って制作しています。
          小さく作って動かし、改善しながら理解を深めることを大切にしています。
        </p>
      </section>

      <section className="section" aria-labelledby="skills-title">
        <h2 id="skills-title">Skills</h2>
        <ul className="inline-list" aria-label="Skills list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="projects-title">
        <h2 id="projects-title">Projects</h2>
        <ul className="project-list">
          {projects.map((project) => (
            <li key={project.title} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="meta">{project.tech}</p>
              <a href={project.link}>View project</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Contact</h2>
        <p>
          制作や学習についての連絡は、以下のリンクからお願いします。
        </p>
        <ul className="contact-list">
          <li>
            <a href="mailto:miya-kun@sfc.wide.ad.jp">miya-kun@sfc.wide.ad.jp</a>
          </li>
          <li>
            <a href="https://github.com/otofu1024" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://x.com/yourname" target="_blank">
              X
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default App
