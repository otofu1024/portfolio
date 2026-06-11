import { useEffect, useState } from 'react'
import icon from './assets/icon.png'

const skillTree = [
  {
    language: 'Python',
    libraries: ['FastAPI', 'httpx', 'asyncio', 'Pydantic'],
  },
  {
    language: 'Rust',
    libraries: ['axum', 'tokio'],
  },
]

const learningTopics = [
  'TypeScript',
  'React',
  'Next.js',
  'Haskell',
  'Go',
  'SQL',
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
    title: 'LINE Chatbot',
    description:
      'LINE APIとGemini APIを使ったキャラクターチャットbotです。天気検索や授業検索機能も実装しました。',
    tech: 'Python, LINE API, Gemini API',
    link: 'https://github.com/otofu1024/char_linebot',
  },
]

const navItems = ['About', 'Skills', 'Projects', 'Contact']

const profileFacts = [
  { label: '所属', value: '慶應義塾大学 SFC', icon: 'school' },
  { label: '出身', value: '富山', icon: 'location' },
  { label: '使用言語', value: 'Python', icon: 'code' },
  { label: '関心', value: '分散システム', icon: 'layers' },
] as const

function App() {
  const [activeSection, setActiveSection] = useState('About')
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
          setActiveSection(
            visibleEntry.target.id[0].toUpperCase() +
              visibleEntry.target.id.slice(1),
          )
        }
      },
      {
        rootMargin: '-35% 0px -50% 0px',
        threshold: [0.15, 0.35, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleNavClick = (item: string) => {
    setActiveSection(item)
  }

  return (
    <main className="min-h-dvh overflow-hidden bg-[#FDFBF2] text-[#4A3E31] transition-colors duration-300 dark:bg-[#171911] dark:text-[#F7F0DD]">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-[#E5D8B5]/80 bg-[#FDFBF2]/85 backdrop-blur-xl transition-colors duration-300 dark:border-[#566333]/70 dark:bg-[#171911]/88">
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            className="text-3xl font-black tracking-[0.16em] text-[#5F8F35]"
            href="#top"
          >
            E.M.
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-10 text-base font-semibold text-[#4A3E31] dark:text-[#F7F0DD]">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    className={`relative py-7 transition hover:text-[#5F8F35] focus-visible:text-[#5F8F35] dark:hover:text-[#A9BE78] dark:focus-visible:text-[#A9BE78] ${
                      activeSection === item
                        ? 'text-[#5F8F35] dark:text-[#A9BE78]'
                        : ''
                    }`}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => handleNavClick(item)}
                  >
                    {item}
                    <span
                      className={`absolute inset-x-3 -bottom-px h-1 bg-[#6E9D3A] transition-opacity duration-200 dark:bg-[#A9BE78] ${
                        activeSection === item ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="border border-[#DCCA9D] px-4 py-2 text-sm font-black text-[#5F8F35] transition hover:border-[#6E9D3A] dark:border-[#566333] dark:text-[#A9BE78] dark:hover:border-[#A9BE78]"
              type="button"
              onClick={() => setIsDark((current) => !current)}
              aria-label={isDark ? 'ライトモードに切り替える' : 'ダークモードに切り替える'}
            >
              {isDark ? 'Light' : 'Dark'}
            </button>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <button
              className="border border-[#DCCA9D] px-3 py-2 text-sm font-black text-[#5F8F35] transition hover:border-[#6E9D3A] dark:border-[#566333] dark:text-[#A9BE78] dark:hover:border-[#A9BE78]"
              type="button"
              onClick={() => setIsDark((current) => !current)}
              aria-label={isDark ? 'ライトモードに切り替える' : 'ダークモードに切り替える'}
            >
              {isDark ? 'Light' : 'Dark'}
            </button>
            <a
              className="border border-[#DCCA9D] px-4 py-2 text-sm font-bold text-[#5F8F35] transition hover:border-[#6E9D3A] dark:border-[#566333] dark:text-[#A9BE78]"
              href="#contact"
              onClick={() => handleNavClick('Contact')}
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section
        id="top"
        className="relative min-h-dvh px-5 pt-28 pb-12 sm:px-8 lg:px-12"
        aria-labelledby="hero-title"
      >
        <div className="absolute top-[9.5rem] right-[-5vw] hidden h-[78vh] w-[52vw] rotate-[-9deg] rounded-[6rem] bg-[#6E9D3A] transition-colors duration-300 dark:bg-[#36511F] lg:block" />
        <div className="absolute top-32 -left-8 hidden text-[19rem] leading-none font-black tracking-[-0.08em] text-white/60 select-none dark:text-[#222817]/80 sm:block">
          E
        </div>
        <div className="absolute bottom-0 -left-7 hidden text-[20rem] leading-none font-black tracking-[-0.08em] text-white/60 select-none dark:text-[#222817]/80 sm:block">
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
              className="text-[clamp(4.6rem,12vw,8.9rem)] leading-[0.92] font-black tracking-[-0.08em] text-[#3F382F] dark:text-[#F7F0DD]"
            >
              Eito Miyamoto
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-normal font-semibold text-[#4A3E31] dark:text-[#E9DDBB]">
              慶應義塾大学 環境情報学部でコンピュータサイエンスを学んでいます。
               <br />
              分散システムとWeb技術に関心があり、Pythonを中心に開発しています。
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                className="inline-flex min-w-56 items-center justify-center gap-8 bg-[#6E9D3A] px-8 py-5 text-lg font-black text-white shadow-[0_18px_34px_rgba(95,143,53,0.25)] transition hover:-translate-y-1 hover:bg-[#5F8F35] dark:bg-[#82A94E] dark:text-[#171911] dark:hover:bg-[#A9BE78]"
                href="#contact"
              >
                Contactへ
                <span aria-hidden="true" className="text-3xl leading-none">
                  →
                </span>
              </a>
              <a
                className="inline-flex min-w-56 items-center justify-center gap-5 border border-[#DCCA9D] bg-[#FDFBF2]/80 px-8 py-5 text-lg font-black text-[#4A3E31] transition hover:-translate-y-1 hover:border-[#6E9D3A] hover:text-[#5F8F35] dark:border-[#566333] dark:bg-[#202416]/80 dark:text-[#F7F0DD] dark:hover:border-[#A9BE78] dark:hover:text-[#A9BE78]"
                href="https://github.com/otofu1024"
                target="_blank"
                rel="noreferrer"
              >
                GitHubを見る
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="relative z-10 border border-[#DCCA9D] bg-[#FDFBF2]/90 p-5 shadow-[0_28px_80px_rgba(74,62,49,0.16)] backdrop-blur dark:border-[#566333] dark:bg-[#202416]/90 dark:shadow-[0_28px_80px_rgba(0,0,0,0.32)]">
            <span className="absolute top-5 left-5 h-9 w-9 border-t-4 border-l-4 border-[#5F8F35]" />
            <span className="absolute right-5 bottom-5 h-9 w-9 border-r-4 border-b-4 border-[#5F8F35]" />
            <div className="border border-[#DCCA9D] bg-white/45 p-7 dark:border-[#566333] dark:bg-[#171911]/60">
              <img
                className="mx-auto aspect-[1.18/1] w-full max-w-[430px] object-contain"
                src={icon}
                alt="宮本英人のアイコン"
              />
            </div>
            <dl className="mt-7 grid grid-cols-1 divide-y divide-[#E5D8B5] dark:divide-[#566333] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {profileFacts.map((fact, index) => (
                <div
                  className={`flex gap-4 px-4 py-5 ${
                    index > 1 ? 'sm:border-t sm:border-[#E5D8B5] sm:dark:border-[#566333]' : ''
                  } ${index % 2 === 0 ? 'sm:pl-0' : 'sm:pr-0'}`}
                  key={fact.label}
                >
                  <dt className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#EEF2DF] text-lg font-black text-[#5F8F35] dark:bg-[#2B351C] dark:text-[#A9BE78]">
                    <ProfileFactIcon name={fact.icon} />
                  </dt>
                  <dd>
                    <span className="block text-sm font-bold text-[#8B7B61] dark:text-[#B9AA82]">
                      {fact.label}
                    </span>
                    <span className="mt-1 block text-lg font-black text-[#3F382F] dark:text-[#F7F0DD]">
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
          className="grid gap-10 border-t border-[#E5D8B5] py-20 dark:border-[#566333] md:grid-cols-[260px_1fr]"
          aria-labelledby="about-title"
        >
          <SectionTitle eyebrow="About" title="私について" />
          <div className="grid gap-6 lg:grid-cols-2">
            <p className="bg-white/55 p-7 text-lg leading-9 font-semibold text-[#5F5143] dark:bg-[#202416]/80 dark:text-[#D8CDAA]">
              2006年生まれ、
              富山出身。
              <br />
              趣味は映画鑑賞、ゲーム、読書です。
            </p>
            <p className="bg-[#EEF2DF] p-7 text-lg leading-9 font-semibold text-[#4A3E31] dark:bg-[#2B351C] dark:text-[#F7F0DD]">
              大学ではコンピュータサイエンスを専攻し、特に分散システムについて学んでいます。
              <br />
              現在はPython中心の開発から一歩進み、Rustの所有権モデルや型システムを通じて、より堅牢なソフトウェア設計を学んでいます。
            </p>
          </div>
        </section>

        <section
          id="skills"
          className="grid gap-10 border-t border-[#E5D8B5] py-20 dark:border-[#566333] md:grid-cols-[260px_1fr]"
          aria-labelledby="skills-title"
        >
          <SectionTitle eyebrow="Skills" title="技術" />
          <div className="space-y-10">
            <div>
              <p className="mb-5 text-base font-black text-[#6F6559] dark:text-[#B9AA82]">
                使用技術
              </p>
              <ul className="space-y-5" aria-label="使用技術">
                {skillTree.map((skill) => (
                  <li
                    className="border-l-4 border-[#6E9D3A] bg-white/55 px-6 py-5 dark:border-[#A9BE78] dark:bg-[#202416]/80"
                    key={skill.language}
                  >
                    <p className="text-2xl font-black text-[#3F382F] dark:text-[#F7F0DD]">
                      {skill.language}
                    </p>
                    {skill.libraries.length > 0 ? (
                      <p className="mt-3 pl-4 text-lg font-bold text-[#6F6559] dark:text-[#D8CDAA]">
                        ┗ {skill.libraries.join(', ')}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
            <SkillGroup title="学びたい技術" items={learningTopics} />
          </div>
        </section>

        <section
          id="projects"
          className="grid gap-10 border-t border-[#E5D8B5] py-20 dark:border-[#566333] md:grid-cols-[260px_1fr]"
          aria-labelledby="projects-title"
        >
          <SectionTitle eyebrow="Projects" title="作ったもの" />
          <ul className="grid gap-5">
            {projects.map((project, index) => (
              <li
                className="group grid gap-6 border border-[#DCCA9D] bg-white/60 p-7 transition hover:-translate-y-1 hover:border-[#6E9D3A] hover:bg-white/80 dark:border-[#566333] dark:bg-[#202416]/70 dark:hover:border-[#A9BE78] dark:hover:bg-[#202416] md:grid-cols-[80px_1fr_auto] md:items-center"
                key={project.title}
              >
                <span className="text-5xl font-black tracking-[-0.08em] text-[#DCCA9D] dark:text-[#566333]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-3xl font-black text-[#3F382F] dark:text-[#F7F0DD]">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-8 font-medium text-[#6F6559] dark:text-[#D8CDAA]">
                    {project.description}
                  </p>
                  <p className="mt-4 text-sm font-black text-[#5F8F35]">
                    {project.tech}
                  </p>
                </div>
                <a
                  className="inline-flex w-fit items-center gap-4 border border-[#DCCA9D] px-5 py-3 text-sm font-black text-[#4A3E31] transition group-hover:border-[#6E9D3A] group-hover:text-[#5F8F35] dark:border-[#566333] dark:text-[#F7F0DD] dark:group-hover:border-[#A9BE78] dark:group-hover:text-[#A9BE78]"
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
          className="relative border-t border-[#E5D8B5] py-20 dark:border-[#566333]"
          aria-labelledby="contact-title"
        >
          <div className="absolute top-20 right-0 hidden grid-cols-8 gap-4 md:grid">
            {Array.from({ length: 32 }).map((_, index) => (
              <span
                className="size-1 rounded-full bg-[#A9BE78]/70 dark:bg-[#A9BE78]/45"
                key={`contact-dot-${index}`}
              />
            ))}
          </div>
          <div className="relative max-w-5xl">
            <div className="flex items-center gap-4">
              <span className="flex size-9 shrink-0 items-center justify-center text-[#5F8F35] dark:text-[#A9BE78]">
                <ContactIcon name="mail" />
              </span>
              <h2
                id="contact-title"
                className="text-4xl leading-tight font-black tracking-[-0.04em] text-[#3F382F] dark:text-[#F7F0DD]"
              >
                連絡先
              </h2>
            </div>
            <p className="mt-7 text-xl leading-9 font-semibold text-[#5F5143] dark:text-[#D8CDAA]">
              制作や学習についての連絡は、メールまたはGitHubからお願いします。
            </p>
            <ul className="mt-9 grid gap-5 lg:grid-cols-[minmax(0,1.16fr)_minmax(0,0.84fr)]">
              <li>
                <a
                  className="group grid h-full min-h-52 rounded-[1.75rem] border border-[#DCCA9D] bg-white/75 p-7 shadow-[0_18px_44px_rgba(74,62,49,0.10)] transition hover:-translate-y-1 hover:border-[#6E9D3A] hover:bg-white dark:border-[#566333] dark:bg-[#202416]/80 dark:shadow-[0_18px_44px_rgba(0,0,0,0.22)] dark:hover:border-[#A9BE78] dark:hover:bg-[#202416] xl:p-8"
                  href="mailto:miya-kun@sfc.wide.ad.jp"
                >
                  <span className="flex items-center gap-5">
                    <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#EEF2DF] text-[#5F8F35] dark:bg-[#2B351C] dark:text-[#A9BE78]">
                      <ContactIcon name="mail" />
                    </span>
                    <span>
                      <span className="block text-sm font-black tracking-[0.18em] text-[#5F8F35] uppercase">
                        Email
                      </span>
                      <span className="mt-2 block break-all text-lg font-black text-[#0EA5E9] transition group-hover:text-[#0284C7] dark:text-[#67E8F9] dark:group-hover:text-[#A5F3FC] sm:break-normal xl:text-xl">
                        miya-kun@sfc.wide.ad.jp
                      </span>
                    </span>
                  </span>
                  <span className="mt-8 flex items-center justify-between gap-4">
                    <span className="text-lg font-bold text-[#6F6559] dark:text-[#D8CDAA]">
                      メールを送る
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex size-14 items-center justify-center rounded-full bg-[#EEF2DF] text-3xl font-black text-[#6E9D3A] transition group-hover:translate-x-1 dark:bg-[#2B351C] dark:text-[#A9BE78]"
                    >
                      →
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="group grid h-full min-h-52 rounded-[1.75rem] border border-[#DCCA9D] bg-white/75 p-7 shadow-[0_18px_44px_rgba(74,62,49,0.10)] transition hover:-translate-y-1 hover:border-[#6E9D3A] hover:bg-white dark:border-[#566333] dark:bg-[#202416]/80 dark:shadow-[0_18px_44px_rgba(0,0,0,0.22)] dark:hover:border-[#A9BE78] dark:hover:bg-[#202416]"
                  href="https://github.com/otofu1024"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex items-center gap-5">
                    <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#EEF2DF] text-[#3F382F] dark:bg-[#2B351C] dark:text-[#F7F0DD]">
                      <ContactIcon name="github" />
                    </span>
                    <span>
                      <span className="block text-sm font-black tracking-[0.18em] text-[#5F8F35] uppercase">
                        GitHub
                      </span>
                      <span className="mt-2 block text-xl font-black text-[#0EA5E9] transition group-hover:text-[#0284C7] dark:text-[#67E8F9] dark:group-hover:text-[#A5F3FC]">
                        @otofu1024
                      </span>
                    </span>
                  </span>
                  <span className="mt-8 flex items-center justify-between gap-4">
                    <span className="text-lg font-bold text-[#6F6559] dark:text-[#D8CDAA]">
                      プロフィールを見る
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex size-14 items-center justify-center rounded-full bg-[#EEF2DF] text-3xl font-black text-[#6E9D3A] transition group-hover:translate-x-1 dark:bg-[#2B351C] dark:text-[#A9BE78]"
                    >
                      →
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}

function ContactIcon({ name }: { name: 'mail' | 'github' }) {
  if (name === 'github') {
    return (
      <svg
        aria-hidden="true"
        className="size-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.11.79-.25.79-.56v-2c-3.22.7-3.9-1.38-3.9-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.4-1.27.73-1.56-2.57-.29-5.27-1.28-5.27-5.72 0-1.26.45-2.3 1.2-3.1-.12-.3-.52-1.47.11-3.06 0 0 .98-.31 3.17 1.18a10.96 10.96 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.64 1.59.24 2.76.12 3.06.75.8 1.2 1.84 1.2 3.1 0 4.45-2.7 5.43-5.29 5.72.42.36.78 1.07.78 2.16v3.01c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    )
  }

  return (
    <svg
      aria-hidden="true"
      className="size-8"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
      viewBox="0 0 24 24"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function ProfileFactIcon({
  name,
}: {
  name: (typeof profileFacts)[number]['icon']
}) {
  const commonProps = {
    className: 'size-6',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2.4,
    viewBox: '0 0 24 24',
    'aria-hidden': true,
  } as const

  if (name === 'school') {
    return (
      <svg {...commonProps}>
        <path d="M3 10.5 12 5l9 5.5" />
        <path d="M5.5 10.5v8h13v-8" />
        <path d="M9 18.5v-5.5h6v5.5" />
        <path d="M4 20h16" />
      </svg>
    )
  }

  if (name === 'location') {
    return (
      <svg {...commonProps}>
        <path d="M12 21s6-5.3 6-11a6 6 0 0 0-12 0c0 5.7 6 11 6 11Z" />
        <path d="M12 12.3a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
      </svg>
    )
  }

  if (name === 'code') {
    return (
      <svg {...commonProps}>
        <path d="m9 8-4 4 4 4" />
        <path d="m15 8 4 4-4 4" />
        <path d="m13 6-2 12" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="m12 4 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </svg>
  )
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-sm font-black tracking-[0.22em] text-[#5F8F35] uppercase dark:text-[#A9BE78]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl leading-tight font-black tracking-[-0.04em] text-[#3F382F] dark:text-[#F7F0DD]">
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
      <p className="mb-4 text-base font-black text-[#6F6559] dark:text-[#B9AA82]">{title}</p>
      <ul className="flex flex-wrap gap-3" aria-label={title}>
        {items.map((item) => (
          <li
            className={
              variant === 'filled'
                ? 'bg-[#6E9D3A] px-4 py-2 text-sm font-black text-white dark:bg-[#82A94E] dark:text-[#171911]'
                : 'border border-[#DCCA9D] bg-white/45 px-4 py-2 text-sm font-black text-[#6F6559] dark:border-[#566333] dark:bg-[#202416]/70 dark:text-[#D8CDAA]'
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
