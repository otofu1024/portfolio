import { useEffect, useState } from 'react'
import icon from './assets/icon-display.png'

const navItems = ['About', 'Skills', 'Projects', 'Contact'] as const

const profileFacts = [
  { label: 'Based in', value: 'Toyama / Fujisawa' },
  { label: 'University', value: 'Keio University SFC' },
  { label: 'Focus', value: 'Distributed Systems' },
  { label: 'Favorite', value: 'Yuzu & Sweet things' },
] as const

const skills = [
  {
    language: 'Python',
    experience: '3 years',
    description: 'サーバーサイドと非同期処理を中心に、仕組みを確かめながら実装しています。',
    tools: ['FastAPI', 'httpx', 'asyncio', 'Pydantic'],
  },
  {
    language: 'Rust',
    experience: 'Learning',
    description: '所有権と型システムを通して、堅牢で長く育てられる設計を学んでいます。',
    tools: ['axum', 'tokio'],
  },
] as const

const learningTopics = [
  'TypeScript / React',
  'Database',
  'WebAssembly',
  'Operating System',
  'Software Design',
  'Haskell / Go',
]

const projects = [
  {
    title: 'Raft',
    category: 'Distributed Systems',
    description:
      '分散合意アルゴリズム Raft を、論文に記載されたアルゴリズムを読み解きながら Python と Docker で実装しました。',
    tech: ['Python', 'FastAPI', 'Pydantic', 'Docker'],
    link: 'https://github.com/otofu1024/Raft',
  },
  {
    title: 'LINE Chatbot',
    category: 'Conversational Interface',
    description:
      'LINE API と Gemini API を用いたキャラクターチャット bot。天気検索や授業検索など、会話の先にある機能も設計しました。',
    tech: ['Python', 'LINE API', 'Gemini API'],
    link: 'https://github.com/otofu1024/char_linebot',
  },
] as const

function App() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      return true
    }
    if (savedTheme === 'light') {
      return false
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.1, 0.35, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>

      <header className="site-header">
        <nav className="site-nav" aria-label="メインナビゲーション">
          <a className="brand" href="#top" aria-label="ページの先頭へ">
            <span className="brand-mark" aria-hidden="true">
              E
            </span>
            <span className="brand-name">Eito Miyamoto</span>
          </a>

          <ul className="desktop-nav">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase()
              const isActive = activeSection === sectionId

              return (
                <li key={item}>
                  <a
                    className={isActive ? 'nav-link is-active' : 'nav-link'}
                    href={`#${sectionId}`}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    {item}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setIsDark((current) => !current)}
              aria-label={
                isDark
                  ? 'ライトモードに切り替える'
                  : 'ダークモードに切り替える'
              }
              aria-pressed={isDark}
            >
              <span aria-hidden="true">{isDark ? '☀' : '☾'}</span>
            </button>
            <a className="mobile-contact" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="main-content" className="site-main">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero-decoration" aria-hidden="true">
            <span className="hero-circle" />
            <span className="hero-petal hero-petal-one" />
            <span className="hero-petal hero-petal-two" />
          </div>

          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span aria-hidden="true">01</span>
                Student Engineer · Distributed Systems
              </p>

              <h1 id="hero-title" className="hero-title">
                <span>Eito</span>
                <span>Miyamoto</span>
              </h1>

              <p className="hero-tagline">静かに考え、しなやかにつくる。</p>
              <p className="hero-intro">
                慶應義塾大学 SFC でコンピュータサイエンスを学んでいます。
                分散システムと Web 技術に関心を持ち、Python を中心に開発しています。
              </p>

              <div className="hero-actions">
                <a className="primary-link" href="#projects">
                  つくったものを見る
                  <span aria-hidden="true">↘</span>
                </a>
                <a
                  className="text-link"
                  href="https://github.com/otofu1024"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub を見る（新しいタブで開く）"
                >
                  GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              <p className="scroll-note" aria-hidden="true">
                <span /> Scroll slowly
              </p>
            </div>

            <figure className="turtle-portrait">
              <div className="portrait-label" aria-hidden="true">
                <span>Slow &amp; steady</span>
                <span>Since 2006</span>
              </div>
              <div className="turtle-stage">
                <span className="turtle-sun" aria-hidden="true" />
                <div className="turtle-route" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <img
                  className="turtle-walk"
                  src={icon}
                  alt="ゾウたちを背中に乗せ、ゆっくり歩くカメのイラスト"
                />
                <span className="turtle-shadow" aria-hidden="true" />
              </div>
              <figcaption>
                <span>Keep moving, at my own pace.</span>
                <span aria-hidden="true">✦</span>
              </figcaption>
            </figure>
          </div>

          <dl className="profile-facts" aria-label="プロフィール概要">
            {profileFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="content-wrap">
          <section
            id="about"
            className="content-section"
            aria-labelledby="about-title"
          >
            <SectionHeading number="02" english="About" id="about-title">
              私について
            </SectionHeading>

            <div className="section-body about-body">
              <p className="about-lead">
                好奇心の向く先へ、
                <br />
                <em>ゆっくり、着実に。</em>
              </p>

              <div className="about-columns">
                <article>
                  <p className="mini-label">What I do</p>
                  <h3>仕組みを知るために、つくる。</h3>
                  <p>
                    大学ではコンピュータサイエンス、特に分散システムを学んでいます。論文や仕様を読み、実際に手を動かすことで理解を深めるのが好きです。
                  </p>
                </article>
                <article>
                  <p className="mini-label">Beyond code</p>
                  <h3>物語と、甘いものが好き。</h3>
                  <p>
                    富山出身、2006年生まれ。映画鑑賞、ゲーム、読書が趣味です。アニメ映画とゆず、それから甘いものに目がありません。
                  </p>
                </article>
              </div>

              <ul className="personal-notes" aria-label="好きなもの">
                <li>
                  <span>Film</span>
                  ひゃくえむ。
                </li>
                <li>
                  <span>Film</span>
                  逆襲のシャア
                </li>
                <li>
                  <span>From</span>
                  富山
                </li>
                <li>
                  <span>Favorite</span>
                  ゆず
                </li>
              </ul>
            </div>
          </section>

          <section
            id="skills"
            className="content-section"
            aria-labelledby="skills-title"
          >
            <SectionHeading number="03" english="Skills" id="skills-title">
              技術と学び
            </SectionHeading>

            <div className="section-body skills-body">
              <p className="section-intro">
                使える技術を並べるだけでなく、その背景にある考え方まで理解することを大切にしています。
              </p>

              <div className="skill-list">
                {skills.map((skill) => (
                  <article className="skill-row" key={skill.language}>
                    <div className="skill-name">
                      <h3>{skill.language}</h3>
                      <span>{skill.experience}</span>
                    </div>
                    <div className="skill-detail">
                      <p>{skill.description}</p>
                      <ul aria-label={`${skill.language} の関連技術`}>
                        {skill.tools.map((tool) => (
                          <li key={tool}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>

              <div className="learning-area">
                <div>
                  <p className="mini-label">Growing next</p>
                  <h3>これから育てたいこと</h3>
                </div>
                <ul className="learning-list">
                  {learningTopics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="content-section"
            aria-labelledby="projects-title"
          >
            <SectionHeading
              number="04"
              english="Projects"
              id="projects-title"
            >
              つくったもの
            </SectionHeading>

            <div className="section-body projects-body">
              <p className="section-intro">
                気になった仕組みを、自分の手で確かめるためのプロジェクトです。
              </p>
              <ol className="project-list">
                {projects.map((project, index) => (
                  <li key={project.title}>
                    <article className="project-row">
                      <div className="project-number" aria-hidden="true">
                        0{index + 1}
                      </div>
                      <div className="project-copy">
                        <p className="mini-label">{project.category}</p>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <ul aria-label={`${project.title} の使用技術`}>
                          {project.tech.map((tech) => (
                            <li key={tech}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                      <a
                        className="project-link"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} を GitHub で見る（新しいタブで開く）`}
                      >
                        <span>View project</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section
            id="contact"
            className="contact-section"
            aria-labelledby="contact-title"
          >
            <div className="contact-flower" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <p className="eyebrow">
              <span aria-hidden="true">05</span>
              Contact
            </p>
            <h2 id="contact-title">
              ご一緒できることが
              <br />
              <em>あれば。</em>
            </h2>
            <p>
              制作や学習についてのご連絡は、メールまたは GitHub からどうぞ。
            </p>
            <a className="mail-link" href="mailto:miya-kun@sfc.wide.ad.jp">
              miya-kun@sfc.wide.ad.jp
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="contact-github"
              href="https://github.com/otofu1024"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub @otofu1024（新しいタブで開く）"
            >
              GitHub · @otofu1024
              <span aria-hidden="true">↗</span>
            </a>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Eito Miyamoto</p>
        <p>Made slowly in Toyama &amp; Fujisawa.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}

function SectionHeading({
  number,
  english,
  id,
  children,
}: {
  number: string
  english: string
  id: string
  children: React.ReactNode
}) {
  return (
    <header className="section-heading">
      <p className="eyebrow">
        <span aria-hidden="true">{number}</span>
        {english}
      </p>
      <h2 id={id}>{children}</h2>
      <span className="section-heading-line" aria-hidden="true" />
    </header>
  )
}

export default App
