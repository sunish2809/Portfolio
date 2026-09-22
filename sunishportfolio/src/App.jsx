import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const NAV_SECTIONS = ["about", "experience", "projects"];

const CORE_STACK = [
  "Java",
  "Spring Boot",
  "React",
  "PostgreSQL",
  "AWS",
];

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 1024;

      if (isMobile) {
        const scrollPosition = window.scrollY + 150;

        for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
          const section = document.getElementById(NAV_SECTIONS[i]);

          if (section && scrollPosition >= section.offsetTop) {
            setActiveSection(NAV_SECTIONS[i]);
            break;
          }
        }
      } else {
        const mainContainer = document.querySelector("main");
        if (!mainContainer) return;

        const scrollPosition = mainContainer.scrollTop + 100;

        for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
          const section = document.getElementById(NAV_SECTIONS[i]);

          if (section) {
            const sectionTop = section.offsetTop - mainContainer.offsetTop;

            if (scrollPosition >= sectionTop) {
              setActiveSection(NAV_SECTIONS[i]);
              break;
            }
          }
        }
      }
    };

    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const mainContainer = document.querySelector("main");

    if (mainContainer) {
      mainContainer.addEventListener("scroll", handleScroll);
      return () => mainContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    } else {
      const mainContainer = document.querySelector("main");

      if (mainContainer) {
        const sectionTop = section.offsetTop - mainContainer.offsetTop;
        mainContainer.scrollTo({
          top: sectionTop - 20,
          behavior: "smooth",
        });
      }
    }
  };

  const experiences = [
    {
      period: "2023 — Present",
      title: "Software Engineer – Full Stack",
      company: "PwC India",
      description: (
        <>
          Developing scalable backend services and full-stack enterprise
          applications using Java, Spring Boot, Microservices and REST APIs.

          <div className="mt-5 relative">
            <div className="absolute left-2 top-1 bottom-1 w-px bg-slate-200" />

            <div className="space-y-6 pl-8">
              <TimelineItem
                title="Backend Services & REST APIs"
                body="Designed and optimized 15+ REST APIs using Java and Spring Boot, improving average response time by 25% through query optimization, efficient data access and backend refactoring."
                tags={["Java", "Spring Boot", "REST APIs", "Microservices", "SQL"]}
              />

              <TimelineItem
                title="Real-Time Communication & Security"
                body="Implemented WebSocket-based real-time communication, reducing update latency by 40%. Built secure authentication and authorization using JWT, AWS Cognito and Azure AD/SSO with role-based access control for backend APIs."
                tags={["WebSocket", "JWT", "AWS Cognito", "Azure AD", "RBAC"]}
              />

              <TimelineItem
                title="Data & Full-Stack Applications"
                body="Designed MongoDB schemas and indexes for applications handling 10K+ records, improving query performance for frequently accessed data. Built backend-integrated applications using React.js, Vue.js and Next.js with AWS/Azure services and YAML-based CI/CD pipelines."
                tags={["MongoDB", "React.js", "Vue.js", "Next.js", "CI/CD"]}
              />
            </div>
          </div>
        </>
      ),
      tags: [
        "Java",
        "Spring Boot",
        "Microservices",
        "REST APIs",
        "PostgreSQL",
        "MongoDB",
        "React",
        "Vue.js",
        "AWS",
        "Azure",
      ],
    },
  ];

  const projects = [
    {
      index: "01",
      title: "MemoryGraph",
      description:
        "A private personal memory platform that transforms photos, notes, videos, audio and conversations into searchable, time-aware life events. Designed and built as a modular Spring Boot monolith with PostgreSQL and pgvector, combining full-text and semantic search to retrieve relevant memories.",
      tags: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "JPA / Hibernate",
        "pgvector",
        "Vector Search",
        "Full-Text Search",
        "Hybrid Search",
        "RRF",
        "JWT",
        "Async Processing",
        "Concurrency",
        "Row-Level Locking",
        "SKIP LOCKED",
        "Retries",
        "Exponential Backoff",
        "Docker",
        "Testcontainers",
        "Flyway",
        "REST APIs",
        "System Design",
      ],
      link: "https://memorygraph.net/",
      highlights: [
        { label: "Architecture", value: "Modular Monolith" },
        { label: "Search", value: "Keyword + Semantic" },
        { label: "Processing", value: "Async Jobs + Workers" },
        { label: "Concurrency", value: "PostgreSQL Locking" },
      ],
    },
    {
      index: "02",
      title: "ManagePro",
      description:
        "A full-stack SaaS platform for gyms, libraries, flats and shops, providing tenant management, rent and dues tracking, analytics, reminders and payment workflows.",
      tags: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "JWT",
        "Razorpay",
        "Tailwind CSS",
        "Analytics",
      ],
      link: "https://www.managepro.net.in/",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-600 relative overflow-hidden lg:h-screen">
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid" />

      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0 lg:h-full lg:overflow-hidden">
        <div className="lg:flex lg:justify-between lg:gap-8 lg:h-full">
          <header className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between lg:max-h-screen lg:w-[46%] lg:py-24 mb-14 lg:mb-0 animate-fade-up">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-60 animate-pulse-dot" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-slate-700" />
                </span>
                <span className="text-xs font-medium tracking-wide text-slate-600">
                  Currently at PwC India
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-3">
                Sunish
              </h1>

              <h2 className="text-xl font-medium tracking-tight text-slate-800 sm:text-2xl mb-5">
                Software Engineer – Full Stack
              </h2>

              <p className="text-base sm:text-lg text-slate-700 max-w-sm leading-relaxed mb-7">
                I build scalable backend systems and full-stack applications
                with a focus on reliability, performance, and clean
                architecture.
              </p>

              <div className="flex flex-wrap gap-2 mb-2 max-w-sm">
                {CORE_STACK.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <nav className="hidden lg:block mt-16" aria-label="Page sections">
                <ul className="space-y-1">
                  {NAV_SECTIONS.map((section) => {
                    const isActive = activeSection === section;

                    return (
                      <li key={section}>
                        <a
                          href={`#${section}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveSection(section);
                            scrollToSection(section);
                          }}
                          className="group flex items-center py-2.5"
                        >
                          <span
                            className={`mr-4 h-px transition-all duration-300 ${
                              isActive
                                ? "w-16 bg-slate-900"
                                : "w-8 bg-slate-300 group-hover:w-16 group-hover:bg-slate-700"
                            }`}
                          />
                          <span
                            className={`text-xs font-bold uppercase tracking-[0.18em] transition-colors ${
                              isActive
                                ? "text-slate-900"
                                : "text-slate-400 group-hover:text-slate-700"
                            }`}
                          >
                            {section}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 lg:mt-0">
              <SocialLink
                href="https://github.com/sunish2809"
                label="GitHub"
                icon={Github}
              />
              <SocialLink
                href="https://www.linkedin.com/in/sunish-08b542201"
                label="LinkedIn"
                icon={Linkedin}
              />
              <a
                href="mailto:sunish.5186@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-slate-800"
              >
                <Mail className="w-4 h-4" />
                Get in touch
              </a>
            </div>
          </header>

          <main className="lg:w-[54%] lg:py-24 lg:overflow-y-auto lg:h-full scrollbar-hide">
            <section id="about" className="mb-16 lg:mb-28 scroll-mt-16">
              <SectionLabel>About</SectionLabel>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  I'm a Software Engineer focused on building scalable backend
                  systems and full-stack applications. I enjoy solving
                  engineering problems around APIs, databases, concurrency,
                  asynchronous processing, distributed systems and system
                  design.
                </p>

                <p>
                  Currently, I'm a Software Engineer – Full Stack at{" "}
                  <TextLink href="https://www.pwc.in/">PwC India</TextLink>
                  , where I work with Java, Spring Boot, REST APIs,
                  databases, real-time communication and modern frontend
                  technologies.
                </p>

                <p>
                  I'm also building{" "}
                  <TextLink href="https://memorygraph.net/">MemoryGraph</TextLink>
                  , a private personal memory platform focused on search,
                  asynchronous processing, concurrency and reliable backend
                  architecture.
                </p>
              </div>
            </section>

            <section id="experience" className="mb-16 lg:mb-28 scroll-mt-16">
              <SectionLabel>Experience</SectionLabel>

              <div className="space-y-4">
                {experiences.map((exp) => (
                  <ExperienceCard key={exp.company} exp={exp} />
                ))}
              </div>

              <a
                href="/Sunish_FrontendRes.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-8 inline-flex items-center gap-2 text-slate-900 font-semibold transition-colors hover:text-slate-600"
              >
                View Full Résumé
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </section>

            <section id="projects" className="mb-16 scroll-mt-16">
              <SectionLabel>Projects</SectionLabel>

              <div className="space-y-5">
                {projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>

              <p className="text-sm text-slate-500 mt-8">
                More projects and experiments are available on{" "}
                <TextLink href="https://github.com/sunish2809">GitHub</TextLink>.
              </p>
            </section>

            <footer className="pb-8 text-sm text-slate-500 leading-relaxed border-t border-slate-200 pt-8">
              <p>
                Designed and built with{" "}
                <span className="text-slate-700">React</span>
                {" "}and{" "}
                <span className="text-slate-700">Tailwind CSS</span>
                {" "}— with a strong interest in backend engineering.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-5 lg:hidden">
      <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-900">
        {children}
      </h2>
    </div>
  );
}

function TextLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-slate-600 hover:decoration-slate-500"
    >
      {children}
    </a>
  );
}

function SocialLink({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

function TimelineItem({ title, body, tags }) {
  return (
    <div className="relative">
      <div className="absolute -left-[29px] top-1.5 z-10 h-3 w-3 rounded-full border-2 border-slate-400 bg-white" />
      <h4 className="text-sm font-semibold text-slate-800 mb-1">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {tags.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ exp }) {
  return (
    <article className="surface-card group">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider min-w-32 mt-1">
          {exp.period}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-slate-900 transition-colors group-hover:text-slate-700">
            {exp.title}{" "}
            <span className="text-slate-400">·</span>{" "}
            {exp.company}
          </h3>

          <div className="text-slate-600 mb-5 leading-relaxed">
            {exp.description}
          </div>

          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  const isLink = project.link && project.link !== "#";
  const Card = isLink ? "a" : "article";

  return (
    <Card
      {...(isLink
        ? {
            href: project.link,
            target: "_blank",
            rel: "noreferrer noopener",
            "aria-label": `${project.title} (opens in a new tab)`,
          }
        : {})}
      className={`surface-card group block ${isLink ? "cursor-pointer" : ""}`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <span className="font-display text-sm font-bold tracking-widest text-slate-400">
          {project.index}
        </span>
        {isLink && (
          <ArrowUpRight className="w-4 h-4 text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-slate-900" />
        )}
      </div>

      <h3 className="text-lg font-semibold mb-2 text-slate-900 transition-colors group-hover:text-slate-700">
        {project.title}
      </h3>

      <p className="text-slate-600 mb-5 leading-relaxed">{project.description}</p>

      {project.highlights && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {project.highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3"
            >
              <p className="text-[11px] uppercase tracking-wider text-slate-500 mb-1">
                {item.label}
              </p>
              <p className="text-sm text-slate-800">{item.value}</p>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}
