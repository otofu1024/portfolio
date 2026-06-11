import icon from './assets/icon.png'

const skills = [
  'Python',
  'Rust',
  'Docker',
  'Git',
  'FastAPI',
  'asyncio',
  'httpx',
  'Pydantic',
]

const learningTopics = [
  'Database',
  'TypeScript',
  'React',
  'Next.js',
  'WebAssembly',
  'OS自作',
  'ソフトウェア設計',
  'Haskell',
  'Go',
]

const projects = [
  {
    title: 'Raft',
    description:
      '分散アルゴリズムであるRaftを、論文中のアルゴリズムをもとにPythonとDockerで実装しました。',
    tech: 'Python, FastAPI, Pydantic, httpx, asyncio, Docker',
    link: 'https://github.com/otofu1024/Raft',
  },
  {
    title: 'LINEbot',
    description:
      'LINE APIとGemini APIを使ったキャラクターチャットbotです。天気検索や授業検索機能も実装しました。',
    tech: 'LINE API, Gemini API',
    link: 'https://github.com/otofu1024/char_linebot',
  },
]

const navItems = ['About', 'Skills', 'Projects', 'Contact']

function App() {
  return (
    <main className="min-h-dvh bg-[#FDFBF2] text-[#4A3E31]">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-10 -mx-5 border-b border-[#EADFBA]/80 bg-[#FDFBF2]/90 px-5 py-4 backdrop-blur sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
          <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6">
            <a
              className="text-sm font-semibold tracking-[0.18em] text-[#84A93E] uppercase"
              href="#top"
            >
              H.M.
            </a>
            <ul className="flex flex-wrap justify-end gap-3 text-sm text-[#6F6559] sm:gap-6">
              {navItems.map((item) => (
                <li key={item}>
                  <a className="transition hover:text-[#84A93E]" href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <section
          id="top"
          className="grid min-h-[calc(100dvh-88px)] items-center gap-12 py-16 lg:grid-cols-[1fr_360px] lg:py-24"
          aria-labelledby="hero-title"
        >
          <div>
            <p className="mb-5 inline-flex border border-[#EADFBA] bg-white/60 px-3 py-1 text-sm font-semibold text-[#84A93E]">
              Student Engineer / Distributed Systems
            </p>
            <h1
              id="hero-title"
              className="max-w-3xl text-5xl leading-[1.02] font-bold tracking-[-0.03em] text-[#4A3E31] sm:text-7xl"
            >
              宮本英人
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6F6559] sm:text-xl">
              慶應義塾大学 環境情報学部でコンピュータサイエンスを学んでいます。
              分散システムとWeb技術に関心があり、Pythonを中心に開発しています。
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                className="border border-[#84A93E] bg-[#84A93E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6F8F33]"
                href="#contact"
              >
                Contactへ
              </a>
              <a
                className="border border-[#EADFBA] px-5 py-3 text-sm font-semibold text-[#4A3E31] transition hover:border-[#84A93E] hover:text-[#84A93E]"
                href="https://github.com/otofu1024"
                target="_blank"
                rel="noreferrer"
              >
                GitHubを見る
              </a>
            </div>
          </div>

          <aside className="border border-[#EADFBA] bg-white/55 p-5">
            <img
              className="aspect-square w-full object-cover"
              src={icon}
              alt="宮本英人のアイコン"
            />
            <dl className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 text-sm">
              <div>
                <dt className="text-[#6F6559]">所属</dt>
                <dd className="mt-1 font-semibold">慶應義塾大学 SFC</dd>
              </div>
              <div>
                <dt className="text-[#6F6559]">出身</dt>
                <dd className="mt-1 font-semibold">富山</dd>
              </div>
              <div>
                <dt className="text-[#6F6559]">得意</dt>
                <dd className="mt-1 font-semibold">Python</dd>
              </div>
              <div>
                <dt className="text-[#6F6559]">関心</dt>
                <dd className="mt-1 font-semibold">分散システム</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section
          id="about"
          className="grid gap-8 border-t border-[#EADFBA] py-16 md:grid-cols-[220px_1fr]"
          aria-labelledby="about-title"
        >
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-[#84A93E] uppercase">
              About
            </p>
            <h2 id="about-title" className="mt-3 text-3xl font-bold">
              私について
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[#6F6559]">
            <p>
              2006年生まれ、富山出身です。映画鑑賞、ゲーム、読書が好きで、
              特にアニメ映画をよく観ています。
            </p>
            <p>
              大学では主にコンピュータサイエンス、特に分散システムについて学んでいます。
              最近は脱Pythonを目指し、Rustの所有権や型システムにも取り組んでいます。
            </p>
          </div>
        </section>

        <section
          id="skills"
          className="grid gap-8 border-t border-[#EADFBA] py-16 md:grid-cols-[220px_1fr]"
          aria-labelledby="skills-title"
        >
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-[#84A93E] uppercase">
              Skills
            </p>
            <h2 id="skills-title" className="mt-3 text-3xl font-bold">
              技術
            </h2>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-sm font-semibold text-[#6F6559]">
                使っている言語・技術
              </p>
              <ul className="flex flex-wrap gap-3" aria-label="使用している言語・技術">
                {skills.map((skill) => (
                  <li
                    className="border border-[#EADFBA] bg-white/70 px-3 py-2 text-sm font-medium text-[#4A3E31]"
                    key={skill}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold text-[#6F6559]">
                近いうちに学びたいこと
              </p>
              <ul className="flex flex-wrap gap-3" aria-label="近いうちに学びたいこと">
                {learningTopics.map((topic) => (
                  <li
                    className="border border-[#EADFBA] px-3 py-2 text-sm font-medium text-[#6F6559]"
                    key={topic}
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="grid gap-8 border-t border-[#EADFBA] py-16 md:grid-cols-[220px_1fr]"
          aria-labelledby="projects-title"
        >
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-[#84A93E] uppercase">
              Projects
            </p>
            <h2 id="projects-title" className="mt-3 text-3xl font-bold">
              作ったもの
            </h2>
          </div>
          <ul className="divide-y divide-[#EADFBA] border-y border-[#EADFBA]">
            {projects.map((project) => (
              <li
                className="grid gap-4 py-8 transition md:grid-cols-[1fr_auto] md:items-start"
                key={project.title}
              >
                <div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-3 max-w-2xl leading-7 text-[#6F6559]">
                    {project.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[#84A93E]">
                    {project.tech}
                  </p>
                </div>
                <a
                  className="inline-flex w-fit border border-[#EADFBA] px-4 py-2 text-sm font-semibold text-[#4A3E31] transition hover:border-[#84A93E] hover:text-[#84A93E]"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          className="border-t border-[#EADFBA] py-16"
          aria-labelledby="contact-title"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-[#84A93E] uppercase">
              Contact
            </p>
            <h2 id="contact-title" className="mt-3 text-3xl font-bold">
              連絡先
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#6F6559]">
              制作や学習についての連絡は、メールまたはGitHubからお願いします。
            </p>
            <ul className="mt-7 flex flex-wrap gap-4">
              <li>
                <a
                  className="border border-[#84A93E] bg-[#84A93E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6F8F33]"
                  href="mailto:miya-kun@sfc.wide.ad.jp"
                >
                  miya-kun@sfc.wide.ad.jp
                </a>
              </li>
              <li>
                <a
                  className="border border-[#EADFBA] px-5 py-3 text-sm font-semibold text-[#4A3E31] transition hover:border-[#84A93E] hover:text-[#84A93E]"
                  href="https://github.com/otofu1024"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
