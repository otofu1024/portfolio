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

const profileFacts = [
  { label: '所属', value: '慶應義塾大学 SFC', icon: '🏫' },
  { label: '出身', value: '富山', icon: '📍' },
  { label: '得意', value: 'Python', icon: '</>' },
  { label: '関心', value: '分散システム', icon: '▱' },
]

function App() {
  return (
    <main className="min-h-dvh overflow-hidden bg-[#FDFBF2] text-[#4A3E31]">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-[#E5D8B5]/80 bg-[#FDFBF2]/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            className="text-3xl font-black tracking-[0.16em] text-[#5F8F35]"
            href="#top"
          >
            H.M.
          </a>
          <ul className="hidden items-center gap-10 text-base font-semibold text-[#4A3E31] md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  className="relative py-7 transition hover:text-[#5F8F35] focus-visible:text-[#5F8F35]"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                  {item === 'Contact' ? (
                    <span className="absolute inset-x-3 -bottom-px h-1 bg-[#6E9D3A]" />
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="border border-[#DCCA9D] px-4 py-2 text-sm font-bold text-[#5F8F35] transition hover:border-[#6E9D3A] md:hidden"
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative min-h-dvh px-5 pt-28 pb-12 sm:px-8 lg:px-12"
        aria-labelledby="hero-title"
      >
        <div className="absolute top-20 right-0 bottom-0 hidden w-[45vw] rounded-tl-[110px] bg-[#6E9D3A] lg:block" />
        <div className="absolute top-32 -left-8 hidden text-[19rem] leading-none font-black tracking-[-0.08em] text-white/60 select-none sm:block">
          H
        </div>
        <div className="absolute bottom-0 -left-7 hidden text-[20rem] leading-none font-black tracking-[-0.08em] text-white/60 select-none sm:block">
          M
        </div>
        <div className="absolute right-8 bottom-24 hidden grid-cols-4 gap-4 lg:grid">
          {Array.from({ length: 24 }).map((_, index) => (
            <span
              className="size-1.5 rounded-full bg-[#FDFBF2]/80"
              key={`hero-dot-${index}`}
            />
          ))}
        </div>
        <div className="absolute bottom-16 left-32 hidden grid-cols-12 gap-4 sm:grid">
          {Array.from({ length: 36 }).map((_, index) => (
            <span
              className="size-1 rounded-full bg-[#A9BE78]/70"
              key={`left-dot-${index}`}
            />
          ))}
        </div>

        <div className="relative mx-auto grid min-h-[calc(100dvh-9rem)] w-full max-w-7xl items-center gap-14 lg:grid-cols-[1fr_520px]">
          <div className="max-w-3xl">
            <p className="mb-7 flex items-center gap-4 text-lg font-black text-[#5F8F35]">
              <span className="inline-flex gap-1">
                <span className="block h-6 w-1.5 rotate-45 bg-[#6E9D3A]" />
                <span className="block h-6 w-1.5 rotate-45 bg-[#6E9D3A]" />
                <span className="block h-6 w-1.5 rotate-45 bg-[#6E9D3A]" />
              </span>
              Student Engineer / Distributed Systems
            </p>
            <h1
              id="hero-title"
              className="text-[clamp(4.6rem,12vw,8.9rem)] leading-[0.92] font-black tracking-[-0.08em] text-[#3F382F]"
            >
              宮本英人
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-10 font-semibold text-[#4A3E31]">
              慶應義塾大学 環境情報学部でコンピュータサイエンスを学んでいます。
              分散システムとWeb技術に関心があり、Pythonを中心に開発しています。
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                className="inline-flex min-w-56 items-center justify-center gap-8 bg-[#6E9D3A] px-8 py-5 text-lg font-black text-white shadow-[0_18px_34px_rgba(95,143,53,0.25)] transition hover:-translate-y-1 hover:bg-[#5F8F35]"
                href="#contact"
              >
                Contactへ
                <span aria-hidden="true" className="text-3xl leading-none">
                  →
                </span>
              </a>
              <a
                className="inline-flex min-w-56 items-center justify-center gap-5 border border-[#DCCA9D] bg-[#FDFBF2]/80 px-8 py-5 text-lg font-black text-[#4A3E31] transition hover:-translate-y-1 hover:border-[#6E9D3A] hover:text-[#5F8F35]"
                href="https://github.com/otofu1024"
                target="_blank"
                rel="noreferrer"
              >
                GitHubを見る
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="relative z-10 border border-[#DCCA9D] bg-[#FDFBF2]/90 p-5 shadow-[0_28px_80px_rgba(74,62,49,0.16)] backdrop-blur">
            <span className="absolute top-5 left-5 h-9 w-9 border-t-4 border-l-4 border-[#5F8F35]" />
            <span className="absolute right-5 bottom-5 h-9 w-9 border-r-4 border-b-4 border-[#5F8F35]" />
            <div className="border border-[#DCCA9D] bg-white/45 p-7">
              <img
                className="mx-auto aspect-[1.18/1] w-full max-w-[430px] object-contain"
                src={icon}
                alt="宮本英人のアイコン"
              />
            </div>
            <dl className="mt-7 grid grid-cols-1 divide-y divide-[#E5D8B5] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {profileFacts.map((fact, index) => (
                <div
                  className={`flex gap-4 px-4 py-5 ${
                    index > 1 ? 'sm:border-t sm:border-[#E5D8B5]' : ''
                  } ${index % 2 === 0 ? 'sm:pl-0' : 'sm:pr-0'}`}
                  key={fact.label}
                >
                  <dt className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#EEF2DF] text-lg font-black text-[#5F8F35]">
                    {fact.icon}
                  </dt>
                  <dd>
                    <span className="block text-sm font-bold text-[#8B7B61]">
                      {fact.label}
                    </span>
                    <span className="mt-1 block text-lg font-black text-[#3F382F]">
                      {fact.value}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <section
          id="about"
          className="grid gap-10 border-t border-[#E5D8B5] py-20 md:grid-cols-[260px_1fr]"
          aria-labelledby="about-title"
        >
          <SectionTitle eyebrow="About" title="私について" />
          <div className="grid gap-6 lg:grid-cols-2">
            <p className="bg-white/55 p-7 text-lg leading-9 font-semibold text-[#5F5143]">
              2006年生まれ、富山出身です。映画鑑賞、ゲーム、読書が好きで、
              特にアニメ映画をよく観ています。
            </p>
            <p className="bg-[#EEF2DF] p-7 text-lg leading-9 font-semibold text-[#4A3E31]">
              大学では主にコンピュータサイエンス、特に分散システムについて学んでいます。
              最近は脱Pythonを目指し、Rustの所有権や型システムにも取り組んでいます。
            </p>
          </div>
        </section>

        <section
          id="skills"
          className="grid gap-10 border-t border-[#E5D8B5] py-20 md:grid-cols-[260px_1fr]"
          aria-labelledby="skills-title"
        >
          <SectionTitle eyebrow="Skills" title="技術" />
          <div className="space-y-10">
            <SkillGroup title="使っている言語・技術" items={skills} variant="filled" />
            <SkillGroup title="近いうちに学びたいこと" items={learningTopics} />
          </div>
        </section>

        <section
          id="projects"
          className="grid gap-10 border-t border-[#E5D8B5] py-20 md:grid-cols-[260px_1fr]"
          aria-labelledby="projects-title"
        >
          <SectionTitle eyebrow="Projects" title="作ったもの" />
          <ul className="grid gap-5">
            {projects.map((project, index) => (
              <li
                className="group grid gap-6 border border-[#DCCA9D] bg-white/60 p-7 transition hover:-translate-y-1 hover:border-[#6E9D3A] hover:bg-white/80 md:grid-cols-[80px_1fr_auto] md:items-center"
                key={project.title}
              >
                <span className="text-5xl font-black tracking-[-0.08em] text-[#DCCA9D]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-3xl font-black text-[#3F382F]">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-8 font-medium text-[#6F6559]">
                    {project.description}
                  </p>
                  <p className="mt-4 text-sm font-black text-[#5F8F35]">
                    {project.tech}
                  </p>
                </div>
                <a
                  className="inline-flex w-fit items-center gap-4 border border-[#DCCA9D] px-5 py-3 text-sm font-black text-[#4A3E31] transition group-hover:border-[#6E9D3A] group-hover:text-[#5F8F35]"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          className="relative border-t border-[#E5D8B5] py-20"
          aria-labelledby="contact-title"
        >
          <div className="absolute top-20 right-0 hidden grid-cols-8 gap-4 md:grid">
            {Array.from({ length: 32 }).map((_, index) => (
              <span
                className="size-1 rounded-full bg-[#A9BE78]/70"
                key={`contact-dot-${index}`}
              />
            ))}
          </div>
          <div className="relative max-w-3xl">
            <SectionTitle eyebrow="Contact" title="連絡先" />
            <p className="mt-7 text-xl leading-9 font-semibold text-[#5F5143]">
              制作や学習についての連絡は、メールまたはGitHubからお願いします。
            </p>
            <ul className="mt-9 flex flex-wrap gap-5">
              <li>
                <a
                  className="inline-flex bg-[#6E9D3A] px-7 py-4 text-base font-black text-white shadow-[0_18px_34px_rgba(95,143,53,0.25)] transition hover:-translate-y-1 hover:bg-[#5F8F35]"
                  href="mailto:miya-kun@sfc.wide.ad.jp"
                >
                  miya-kun@sfc.wide.ad.jp
                </a>
              </li>
              <li>
                <a
                  className="inline-flex border border-[#DCCA9D] bg-[#FDFBF2]/80 px-7 py-4 text-base font-black text-[#4A3E31] transition hover:-translate-y-1 hover:border-[#6E9D3A] hover:text-[#5F8F35]"
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

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-sm font-black tracking-[0.22em] text-[#5F8F35] uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl leading-tight font-black tracking-[-0.04em] text-[#3F382F]">
        {title}
      </h2>
    </div>
  )
}

function SkillGroup({
  title,
  items,
  variant = 'outline',
}: {
  title: string
  items: string[]
  variant?: 'filled' | 'outline'
}) {
  return (
    <div>
      <p className="mb-4 text-base font-black text-[#6F6559]">{title}</p>
      <ul className="flex flex-wrap gap-3" aria-label={title}>
        {items.map((item) => (
          <li
            className={
              variant === 'filled'
                ? 'bg-[#6E9D3A] px-4 py-2 text-sm font-black text-white'
                : 'border border-[#DCCA9D] bg-white/45 px-4 py-2 text-sm font-black text-[#6F6559]'
            }
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
