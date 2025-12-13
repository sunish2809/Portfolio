import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"];
      const isMobile = window.innerWidth < 1024;

      if (isMobile) {
        // On mobile, use window scroll
        const scrollPosition = window.scrollY + 150;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const sectionTop = section.offsetTop;
            if (scrollPosition >= sectionTop) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      } else {
        // On desktop, use main container scroll
        const mainContainer = document.querySelector("main");
        if (!mainContainer) return;

        const scrollPosition = mainContainer.scrollTop + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const sectionTop = section.offsetTop - mainContainer.offsetTop;
            if (scrollPosition >= sectionTop) {
              setActiveSection(sections[i]);
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
    } else {
      const mainContainer = document.querySelector("main");
      if (mainContainer) {
        mainContainer.addEventListener("scroll", handleScroll);
        return () => mainContainer.removeEventListener("scroll", handleScroll);
      }
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Check if we're on mobile (window width < 1024px) or desktop
    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
      // On mobile, scroll the whole page
      const sectionTop = section.offsetTop - 80; // Offset for better visibility
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    } else {
      // On desktop, scroll within the main container
      const mainContainer = document.querySelector("main");
      if (mainContainer) {
        const sectionTop = section.offsetTop - mainContainer.offsetTop;
        mainContainer.scrollTo({
          top: sectionTop - 20, // 20px offset for better visibility
          behavior: "smooth",
        });
      }
    }
  };

  const experiences = [
    {
      period: "2023 — Present",
      title: "Frontend Engineer",
      company: "PwC India",
      description: (
        <>
          Build and maintain critical components used to construct the frontend.
          Work closely with cross-functional teams to implement best practices
          in web accessibility.
          <div className="mt-4 relative">
            {/* Vertical line connecting circles */}
            <div className="absolute left-2 top-0 bottom-0 w-px bg-slate-700"></div>

            <div className="space-y-6 pl-8">
              <div className="relative">
                {/* Circle */}
                <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full border-2 border-teal-400 bg-slate-900 z-10"></div>
                <h4 className="text-sm font-semibold text-slate-300 mb-1">
                  Fusion Chatbot (Security Domain)
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Contributed as a Frontend Developer to build an advanced
                  security-focused chatbot platform similar to ChatGPT,
                  specialized for threat-hunting queries. Developed dynamic UI
                  components, interactive input controls, and an editable
                  conversation history module from scratch based on Figma
                  designs. Collaborated closely with clients to refine UX,
                  optimize performance, and enhance scalability. Implemented
                  robust state management using Redux and enabled real-time
                  communication with WebSocket integration.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["React.js", "Redux", "WebSocket", "React Router"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-xs font-medium text-teal-300/80 bg-teal-400/5 rounded"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="relative">
                {/* Circle */}
                <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full border-2 border-teal-400 bg-slate-900 z-10"></div>
                <h4 className="text-sm font-semibold text-slate-300 mb-1">
                  Resource Management & Demand Forecast (Pharma Domain)
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Worked on a large-scale workforce optimization platform for
                  one of the major Pharma clients, enabling intelligent resource
                  allocation and demand forecasting. Built responsive and
                  scalable UI modules that supported workforce planning,
                  skill-gap analysis, and future hiring predictions. Focused on
                  improving user experience and helping stakeholders make
                  data-driven decisions through a streamlined Vue-based
                  interface.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["Vue.js"].map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs font-medium text-teal-300/80 bg-teal-400/5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                {/* Circle */}
                <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full border-2 border-teal-400 bg-slate-900 z-10"></div>
                <h4 className="text-sm font-semibold text-slate-300 mb-1">
                  FinCrime Investigation Tool (Banking Domain)
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Developed the frontend for an internal banking tool used by
                  financial investigators to detect and analyze fraudulent
                  activities. Managed and visualized large datasets using
                  efficient state management techniques. Designed multiple
                  analytical dashboards containing bar, pie, and KPI-driven
                  charts using FusionCharts. Built components from the ground up
                  using Figma designs and ensured smooth navigation using React
                  Router, while collaborating with clients to optimize workflows
                  and UI performance.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["React.js", "FusionCharts", "React Router"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-xs font-medium text-teal-300/80 bg-teal-400/5 rounded"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      tags: [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Vue.js",
        "React JS",
        "Angular JS",
      ],
    },
  ];

  const projects = [
    {
      title: "ManagePro",
      description:
        "A full-stack workforce optimization platform for gyms, libraries, and similar services, enabling seamless user management, payment tracking, and real-time data visualization.",
      tags: [
        "React",
        "Node.js",
        "RazorPay",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
      link: "https://www.managepro.net.in/",
    },
    {
      title: "Task Management App",
      description:
        "This is a full-stack web application that allows users to manage tasks and projects efficiently. Built with a React frontend and an Express backend, the ToDo-Web app offers user authentication, task management, and project categorization, enabling users to stay organized and prioritize tasks.",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
      link: "https://todo-web-frontend-chug.onrender.com",
    },
  ];

  const ExperienceCard = ({ exp, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative p-6 rounded-lg transition-all duration-300 ${
          isHovered ? "bg-slate-800/50 shadow-lg" : ""
        }`}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="text-sm text-slate-400 font-mono min-w-32 mt-1">
            {exp.period}
          </div>
          <div className="flex-1">
            <h3
              className={`text-lg font-semibold mb-2 transition-colors ${
                isHovered ? "text-teal-300" : "text-slate-200"
              }`}
            >
              {exp.title} · {exp.company}
            </h3>
            <div className="text-slate-400 mb-4 leading-relaxed">
              {exp.description}
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer noopener"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative block p-6 rounded-lg transition-all duration-300 cursor-pointer ${
          isHovered ? "bg-slate-800/50 shadow-lg" : ""
        }`}
        aria-label={`${project.title} (opens in a new tab)`}
      >
        <div className="flex gap-4">
          <div className="flex-1">
            <h3
              className={`text-lg font-semibold mb-2 flex items-center gap-2 transition-colors ${
                isHovered ? "text-teal-300" : "text-slate-200"
              }`}
            >
              {project.title}
              <ExternalLink
                className={`w-4 h-4 transition-transform ${
                  isHovered ? "translate-x-1 -translate-y-1" : ""
                }`}
              />
            </h3>
            <p className="text-slate-400 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 relative overflow-hidden lg:h-screen">
      {/* Gradient spotlight effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0 lg:h-full lg:overflow-hidden">
        <div className="lg:flex lg:justify-between lg:gap-4 lg:h-full">
          {/* Left Column - Fixed */}
          <header className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between lg:max-h-screen lg:w-[48%] lg:py-24 mb-12 lg:mb-0">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-3">
                Sunish
              </h1>
              <h2 className="text-xl font-medium tracking-tight text-slate-200 sm:text-2xl mb-4">
                Frontend Engineer
              </h2>
              <p className="text-lg text-slate-400 max-w-xs leading-normal mb-8 lg:mb-0">
                I build accessible, pixel-perfect digital experiences for the
                web.
              </p>

              {/* Navigation */}
              <nav className="hidden lg:block mt-16">
                <ul className="space-y-4">
                  {["about", "experience", "projects"].map((section) => (
                    <li key={section}>
                      <a
                        href={`#${section}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(section);
                          scrollToSection(section);
                        }}
                        className="group flex items-center py-2"
                      >
                        <span
                          className={`mr-4 h-px transition-all ${
                            activeSection === section
                              ? "w-16 bg-slate-200"
                              : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                          }`}
                        />
                        <span
                          className={`text-xs font-bold uppercase tracking-widest ${
                            activeSection === section
                              ? "text-slate-200"
                              : "text-slate-500 group-hover:text-slate-200"
                          }`}
                        >
                          {section}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-6 lg:mt-0">
              <a
                href="https://github.com/sunish2809"
                target="_blank"
                rel="noreferrer noopener"
                className="text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="GitHub (opens in a new tab)"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sunish-08b542201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer noopener"
                className="text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="LinkedIn (opens in a new tab)"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=sunish.5186@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
                className="text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="Email (opens Gmail in a new tab)"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </header>

          {/* Right Column - Scrollable */}
          <main className="lg:w-[52%] lg:py-24 lg:overflow-y-auto lg:h-full scrollbar-hide">
            {/* About Section */}
            <section id="about" className="mb-16 lg:mb-36 scroll-mt-16">
              <div className="mb-4 lg:hidden">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  About
                </h2>
              </div>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I'm a developer passionate about crafting accessible,
                  pixel-perfect user interfaces that blend thoughtful design
                  with robust engineering. My favorite work lies at the
                  intersection of design and development, creating experiences
                  that not only look great but are meticulously built for
                  performance and usability.
                </p>
                <p>
                  Currently, I'm a Front-End Engineer at{" "}
                  <a
                    href="https://www.pwc.in/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    aria-label="PwC India (opens in a new tab)"
                  >
                    PwC India
                  </a>
                  , specializing in building accessible web applications. I
                  contribute to the creation and maintenance of UI components
                  that power modern web experiences.
                </p>
                <p>
                  In my spare time, I enjoy exploring new technologies,
                  contributing to open-source projects, and sharing knowledge
                  with the developer community.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-16 lg:mb-36 scroll-mt-16">
              <div className="mb-4 lg:hidden">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  Experience
                </h2>
              </div>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <ExperienceCard key={index} exp={exp} index={index} />
                ))}
              </div>
              <a
                href="/Sunish_FrontendRes.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-slate-200 hover:text-teal-300 transition-colors mt-8 group"
                aria-label="View Full Résumé (opens in a new tab)"
              >
                <span className="font-semibold">View Full Résumé</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-16 scroll-mt-16">
              <div className="lg:hidden mb-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  Projects
                </h2>
              </div>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-slate-200 hover:text-teal-300 transition-colors mt-8 group"
              >
                <span className="font-semibold">View Full Project Archive</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </section>

            {/* Footer */}
            <footer className="text-sm text-slate-500 leading-relaxed">
              <p>
                Coded with passion. Built with{" "}
                <span className="text-slate-400">React</span> and{" "}
                <span className="text-slate-400">Tailwind CSS</span>.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
