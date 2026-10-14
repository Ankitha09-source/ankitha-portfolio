
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
  Heart,
  Code2,
  Menu,
  X,
  Sparkles,
  Database,
  Globe,
  Coffee,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import "./App.css";

const skills = [
  { name: "Java", icon: "☕", category: "Backend" },
  { name: "JavaScript", icon: "🟨", category: "Frontend" },
  { name: "Python", icon: "🐍", category: "Programming" },
  { name: "C", icon: "💻", category: "Programming" },
  { name: "C++", icon: "⚙️", category: "Programming" },
  { name: "HTML5", icon: "🌐", category: "Frontend" },
  { name: "CSS3", icon: "🎨", category: "Frontend" },
  { name: "React.js", icon: "⚛️", category: "Frontend" },
  { name: "Spring Boot", icon: "🍃", category: "Backend" },
  { name: "Spring Data JPA", icon: "🔗", category: "Backend" },
  { name: "Hibernate", icon: "🗄️", category: "Backend" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "Express.js", icon: "🚀", category: "Backend" },
  { name: "MySQL", icon: "🐬", category: "Database" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "Redis", icon: "🔴", category: "Database" },
  { name: "Git", icon: "🔀", category: "Tools" },
  { name: "GitHub", icon: "🐙", category: "Tools" },
  { name: "VS Code", icon: "💻", category: "Tools" },
  { name: "REST APIs", icon: "🔌", category: "Backend" },
];

const projects = [
  {
    number: "01",
    name: "Book My Ticket",
    subtitle: "Movie Ticket Booking System",
    description:
      "A Java and Spring Boot application for browsing movies, managing shows, selecting seats, and booking tickets. Includes separate user and admin workflows.",
    tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Redis"],
    type: "FULL-STACK DEVELOPMENT",
    featured: true,
    link: "https://github.com/Ankitha09-source/book-my-ticket",
    emoji: "🎬",
    className: "ticket-project",
  },
  {
    number: "02",
    name: "Digital Assist to Indian Farming",
    subtitle: "Crop Recommendation & Yield Prediction",
    description:
      "An agricultural decision-support project that uses machine learning to recommend suitable crops and estimate crop yield from soil, weather, and farming inputs.",
    tags: ["Python", "Flask", "Machine Learning"],
    type: "MACHINE LEARNING",
    featured: false,
    link: "",
    emoji: "🌱",
    className: "farming-project",
  },
  {
    number: "03",
    name: "Faculty Leave Management",
    subtitle: "Leave Requests & Approvals",
    description:
      "A web application project for managing faculty leave requests, approval workflows, and records using frontend components, backend APIs, and SQL.",
    tags: ["React", "Node.js", "Express.js", "SQL"],
    type: "WEB DEVELOPMENT",
    featured: false,
    link: "",
    emoji: "🏫",
    className: "leave-project",
  },
];


// These details appear only when a visitor clicks a project's arrow.
const projectDetails = {
  "01": {
    overview: "A movie-ticket booking application built to bring movie discovery, show selection, seat selection, and booking into one flow, with separate user and admin workflows.",
    problem: "Movie booking involves several connected steps. The interface and backend need to keep the selected movie, show, seats, and booking information consistent.",
    approach: "Organize the application around the booking journey, use Spring Boot for server-side application logic, Thymeleaf for rendered pages, MySQL for persistent records, and Redis where configured for fast data access.",
    contribution: "Use this section to explain the modules you personally implemented and the decisions you made during development. Keep the explanation aligned with the code you can demonstrate in an interview.",
    workflow: ["Browse movies", "Choose a show", "Select seats", "Confirm booking", "Store booking details"],
    challenges: [
      { title: "Keeping the booking flow clear", solution: "Separate movie, show, seat-selection, and booking steps so the user can follow the process." },
      { title: "Handling related data", solution: "Connect the booking flow to backend logic and persistent database records; verify the relationships between shows, seats, and bookings." },
      { title: "Separate user and admin actions", solution: "Keep customer booking actions distinct from administrative movie/show management." }
    ],
    stack: "Java · Spring Boot · MySQL · Thymeleaf · Redis"
  },
  "02": {
    overview: "A machine-learning decision-support project that recommends suitable crops from soil and weather conditions and estimates crop yield using farming inputs.",
    problem: "Farmers must make crop choices using multiple factors. Considering soil and weather information together can make those decisions more informed.",
    approach: "Collect farming inputs such as NPK values, temperature, humidity, pH, soil type, location, season, and area. Use a crop-recommendation model and a separate yield-estimation workflow to produce recommendations and estimates.",
    contribution: "Your stated work included frontend page layouts and design, weather API integration, and geolocation API usage. Explain how the interface gathers relevant information and presents the results.",
    workflow: ["Enter soil & farm details", "Fetch weather/location data", "Prepare model inputs", "Recommend suitable crops", "Estimate expected yield"],
    challenges: [
      { title: "Combining different input sources", solution: "Bring user-entered soil/farm details together with weather and location data before presenting the result." },
      { title: "Making model output understandable", solution: "Present crop recommendations and yield estimates in a clear dashboard instead of exposing raw model output." },
      { title: "Real-world variability", solution: "Treat predictions as estimates: actual outcomes can vary with local conditions, data quality, and farming practices." }
    ],
    stack: "Python · Flask · Machine Learning · Weather API · Geolocation API · React"
  },
  "03": {
    overview: "A web application concept for managing faculty leave requests, approvals, and records through a frontend, backend APIs, and an SQL database.",
    problem: "Leave requests and approvals can become difficult to track when request details, statuses, and records are handled manually or across disconnected steps.",
    approach: "Use a web interface to submit and view requests, backend endpoints to process CRUD operations, and an SQL database to persist leave-related records.",
    contribution: "Describe the screens, API endpoints, database operations, and validation you personally completed. Only claim features that are present in your project implementation.",
    workflow: ["Faculty submits request", "Frontend sends API request", "Backend validates details", "Request is stored in SQL", "Admin reviews status"],
    challenges: [
      { title: "Connecting frontend and backend", solution: "Keep API request formats consistent and show clear success or error feedback to the user." },
      { title: "Maintaining accurate records", solution: "Use database operations to create, retrieve, update, and delete the relevant records." },
      { title: "Approval status clarity", solution: "Represent request status clearly so faculty and administrators can understand the next step." }
    ],
    stack: "React · Node.js · Express.js · SQL · REST APIs"
  }
};

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ number, label, title }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number} /</span>
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      <span className="heading-sparkle">
        <Sparkles size={19} />
      </span>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/Ankitha09-source"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile"
      >
        <span className="social-icon">GH</span>
        GitHub <ArrowUpRight size={14} />
      </a>

      <a
        href="https://www.linkedin.com/in/ankitha-h-6356792b8/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile"
      >
        <span className="social-icon">in</span>
        LinkedIn <ArrowUpRight size={14} />
      </a>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          ankitha<span>.</span>
          <span className="logo-star">✳</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navigation.map(([label, href], index) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              onClick={closeMenu}
            >
              <span className="nav-index">0{index + 1}</span>
              {label}
            </a>
          ))}

          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero section">
        <div className="hero-grid">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow">
              <span className="status-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <p className="hero-greeting">Hey there! I'm</p>

            <h1 className="hero-title">
              Ankitha
              <span className="hero-surname"> H.</span>
              <span className="hero-period">✳</span>
            </h1>

            <h2 className="hero-role">
              Java Full Stack Developer
              <span className="typing-cursor">_</span>
            </h2>

            <p className="hero-description">
              A Computer Science graduate who loves turning ideas
              into web applications. I'm learning, building, and
              exploring how great software comes together, from
              frontend interfaces to backend logic.
            </p>

            <div className="hero-location">
              <MapPin size={16} />
              Bengaluru, India
              <span className="location-divider">/</span>
              CSE Graduate · 2026
            </div>

            <div className="hero-actions">
              <a href="#projects" className="primary-btn">
                Explore my work <ArrowUpRight size={18} />
              </a>

              <a href="#contact" className="secondary-btn">
                <Mail size={17} /> Say hello
              </a>
            </div>

            <div className="hero-socials">
              <span>FIND ME ON</span>
              <a
                href="https://github.com/Ankitha09-source"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/ankitha-h-6356792b8/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>

          {/* Animated developer illustration */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />

            <motion.div
              className="hero-code-card"
              animate={{ y: [0, -12, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="code-card-header">
                <span />
                <span />
                <span />
                <small>developer.java</small>
              </div>

              <div className="code-card-body">
                <p>
                  <span className="code-purple">public class</span>{" "}
                  Ankitha {"{"}
                </p>
                <p className="code-indent">
                  <span className="code-purple">String</span> role =
                </p>
                <p className="code-indent code-string">
                  "Full Stack Developer";
                </p>
                <p className="code-indent">
                  <span className="code-purple">boolean</span> learning =
                </p>
                <p className="code-indent code-green">true;</p>
                <p className="code-indent">
                  <span className="code-purple">void</span> build() {"{"}
                </p>
                <p className="code-indent code-green">
                  {"//"} Turning ideas into reality
                </p>
                <p className="code-indent">{"}"}</p>
                <p>{"}"}</p>
              </div>

              <div className="code-card-footer">
                <span className="status-dot" />
                Always building something
              </div>
            </motion.div>

            <motion.div
              className="floating-chip chip-top"
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Coffee size={17} /> Fueled by coffee
            </motion.div>

            <motion.div
              className="floating-chip chip-bottom"
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              <Code2 size={17} /> Clean code, happy life
            </motion.div>

            <div className="visual-decoration decoration-one">✳</div>
            <div className="visual-decoration decoration-two">✦</div>
          </motion.div>
        </div>

        <a href="#about" className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown size={18} />
        </a>
      </section>

      {/* Scrolling text */}
      <div className="marquee">
        <div className="marquee-track">
          {[1, 2].map((item) => (
            <div className="marquee-group" key={item}>
              {[
                "JAVA DEVELOPMENT",
                "WEB APPLICATIONS",
                "CREATIVE THINKING",
                "CONTINUOUS LEARNING",
                "PROBLEM SOLVING",
              ].map((text) => (
                <span key={text}>
                  {text} <span className="marquee-star">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="section about-section">
        <Reveal>
          <SectionHeading
            number="01"
            label="A LITTLE ABOUT ME"
            title="More than just code."
          />
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy">
            <p className="about-lead">
              I'm a developer who believes great products come from
              curiosity, creativity, and a little bit of debugging.
            </p>

            <p>
              I graduated in Computer Science and Engineering from
              Jain College of Engineering and Research, Belagavi.
              I enjoy working across the frontend and backend,
              learning how applications work end to end, and
              building useful solutions.
            </p>

            <p>
              I'm focused on strengthening my technical skills,
              understanding software design, and preparing for my
              next development opportunity.
            </p>

            <a href="#contact" className="text-link">
              Let's build something cool <ArrowUpRight size={17} />
            </a>
          </Reveal>

          <Reveal className="about-details">
            <div className="detail-card">
              <span className="detail-icon">
                <GraduationCap size={22} />
              </span>
              <div>
                <small>EDUCATION</small>
                <h3>B.E. Computer Science</h3>
                <p>Jain College of Engineering and Research</p>
                <p>2022 — 2026 · CGPA: 8.12</p>
              </div>
            </div>

            <div className="detail-card">
              <span className="detail-icon">
                <BriefcaseBusiness size={22} />
              </span>
              <div>
                <small>EXPERIENCE</small>
                <h3>Full-Stack Development Intern</h3>
                <p>Wizzy Box Private Limited</p>
                <p>Web applications and development workflows</p>
              </div>
            </div>

            <div className="detail-card">
              <span className="detail-icon">
                <Heart size={22} />
              </span>
              <div>
                <small>WHAT I ENJOY</small>
                <h3>Learning by building</h3>
                <p>Java · APIs · Frontend · Databases</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <Reveal>
          <SectionHeading
            number="02"
            label="MY TOOLKIT"
            title="Things I work with."
          />
        </Reveal>

        <Reveal className="skills-intro">
          My developer toolkit keeps evolving. Here are the
          technologies I've worked with or am learning.
        </Reveal>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 5) * 0.06 }}
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-category">{skill.category}</span>
            </motion.div>
          ))}
        </div>

        <div className="skills-note">
          <Database size={18} />
          <span>
            Interested in the complete journey from database
            design to a polished user interface.
          </span>
          <Globe size={18} />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects-section">
        <Reveal>
          <SectionHeading
            number="03"
            label="SELECTED WORK"
            title="Ideas meet execution."
          />
        </Reveal>

        <Reveal className="projects-intro">
          Projects that reflect my learning journey and the
          problems I enjoy solving.
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              className={`project-card ${project.className}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-topline">
                <span className="project-number">{project.number}</span>
                <span className="project-type">{project.type}</span>
              </div>

              <div className="project-art">
                <span className="project-emoji">{project.emoji}</span>
                <span className="project-art-label">
                  {project.featured
                    ? "FEATURED PROJECT"
                    : "PROJECT OVERVIEW"}
                </span>
              </div>

              <div className="project-content">
                <div className="project-title-row">
                  <div>
                    <h3>{project.name}</h3>
                    <p className="project-subtitle">
                      {project.subtitle}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="project-arrow"
                    style={{ cursor: "pointer", background: "transparent", border: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Read project details for ${project.name}`}
                    title="View project details"
                  >
                    <ArrowUpRight size={20} />
                  </button>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub <ExternalLink size={15} />
                  </a>
                ) : (
                  <span className="project-coming-soon">
                    <Code2 size={15} />
                    Source code not linked yet
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <p className="projects-disclaimer">
          The Book My Ticket repository is linked. Other project
          source code can be linked when available.
        </p>
      </section>

      {/* Project details overlay — opens only when a project arrow is clicked */}
      {selectedProject && (
        <div
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999, overflowY: "auto",
            padding: "28px 16px", background: "rgba(5, 6, 16, 0.86)",
            backdropFilter: "blur(12px)", display: "flex", justifyContent: "center", alignItems: "flex-start"
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-detail-title"
            style={{
              width: "min(920px, 100%)", margin: "auto", position: "relative",
              color: "#f4f0ff", background: "linear-gradient(145deg, #151426, #0c0d18 70%)",
              border: "1px solid rgba(199, 139, 255, .35)", borderRadius: "24px",
              boxShadow: "0 25px 100px rgba(0,0,0,.55)", padding: "clamp(22px, 4vw, 42px)"
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              style={{ position: "absolute", right: 18, top: 18, width: 42, height: 42, borderRadius: "50%", border: "1px solid #39334d", background: "#1b192b", color: "#e7c4ff", cursor: "pointer", display: "grid", placeItems: "center" }}
            ><X size={20} /></button>

            <div style={{ color: "#c98cff", fontSize: 12, letterSpacing: "2px", fontWeight: 700, marginBottom: 12 }}>
              PROJECT {selectedProject.number} / CASE STUDY
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, paddingRight: 40, marginBottom: 12 }}>
              <span style={{ fontSize: 42 }} aria-hidden="true">{selectedProject.emoji}</span>
              <div>
                <h2 id="project-detail-title" style={{ fontSize: "clamp(25px, 4vw, 38px)", lineHeight: 1.15, margin: 0, color: "#fff" }}>{selectedProject.name}</h2>
                <p style={{ margin: "8px 0 0", color: "#d39aff" }}>{selectedProject.subtitle}</p>
              </div>
            </div>
            <p style={{ color: "#c3c0d4", lineHeight: 1.85, margin: "18px 0 22px" }}>
              {projectDetails[selectedProject.number]?.overview || selectedProject.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
              {selectedProject.tags.map((tag) => (
                <span key={tag} style={{ border: "1px solid #39334d", borderRadius: 999, padding: "7px 12px", color: "#ded4f2", fontSize: 12 }}>{tag}</span>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 245px), 1fr))", gap: 14, marginBottom: 26 }}>
              {[
                ["THE PROBLEM", projectDetails[selectedProject.number]?.problem],
                ["THE APPROACH", projectDetails[selectedProject.number]?.approach],
                ["MY CONTRIBUTION", projectDetails[selectedProject.number]?.contribution]
              ].map(([heading, body]) => (
                <article key={heading} style={{ padding: 18, borderRadius: 16, background: "rgba(255,255,255,.035)", border: "1px solid #2b293d" }}>
                  <h3 style={{ fontSize: 11, letterSpacing: "1.5px", color: "#c98cff", margin: "0 0 10px" }}>{heading}</h3>
                  <p style={{ margin: 0, color: "#c7c4d8", fontSize: 13, lineHeight: 1.8 }}>{body}</p>
                </article>
              ))}
            </div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ color: "#c98cff", fontSize: 11, letterSpacing: "1.7px", fontWeight: 700, marginBottom: 14 }}>HOW IT WORKS / WORKFLOW</div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: 8 }}>
                {(projectDetails[selectedProject.number]?.workflow || []).map((step, index, steps) => (
                  <div key={step} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <div style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, border: "1px solid rgba(195,139,255,.28)", background: "linear-gradient(90deg, rgba(172,104,255,.12), rgba(255,255,255,.025))", padding: "13px 16px", borderRadius: 12 }}>
                      <span style={{ width: 28, height: 28, flexShrink: 0, display: "grid", placeItems: "center", borderRadius: "50%", background: "#34234b", color: "#dfb8ff", fontSize: 12, fontWeight: 700 }}>{String(index + 1).padStart(2, "0")}</span>
                      <span style={{ color: "#eee9fa", fontSize: 14 }}>{step}</span>
                    </div>
                    {index < steps.length - 1 && <span aria-hidden="true" style={{ color: "#c98cff", fontSize: 18, lineHeight: 1 }}>↓</span>}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 26 }}>
              <div style={{ color: "#c98cff", fontSize: 11, letterSpacing: "1.7px", fontWeight: 700, marginBottom: 14 }}>CHALLENGES & APPROACHES</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 245px), 1fr))", gap: 12 }}>
                {(projectDetails[selectedProject.number]?.challenges || []).map((item, index) => (
                  <article key={item.title} style={{ padding: 16, borderRadius: 14, border: "1px solid #2b293d", background: "rgba(255,255,255,.025)" }}>
                    <div style={{ color: "#9ee7c0", fontSize: 11, letterSpacing: 1, marginBottom: 8 }}>CHALLENGE 0{index + 1}</div>
                    <h3 style={{ margin: "0 0 8px", fontSize: 14, color: "#fff" }}>{item.title}</h3>
                    <p style={{ margin: 0, color: "#bdb9d0", fontSize: 12, lineHeight: 1.75 }}>{item.solution}</p>
                  </article>
                ))}
              </div>
            </div>

            <div style={{ borderTop: "1px solid #302b42", paddingTop: 18, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
              <div>
                <div style={{ color: "#c98cff", fontSize: 10, letterSpacing: "1.5px", marginBottom: 7 }}>TECHNOLOGY</div>
                <p style={{ color: "#d0cbe0", fontSize: 12, margin: 0 }}>{projectDetails[selectedProject.number]?.stack}</p>
              </div>
              {selectedProject.link ? (
                <a href={selectedProject.link} target="_blank" rel="noreferrer" className="project-link" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                  View source code <ExternalLink size={15} />
                </a>
              ) : (
                <span style={{ color: "#8f8ba3", fontSize: 12 }}>Source code link not available</span>
              )}
            </div>
          </section>
        </div>
      )}

      {/* Experience */}
      <section id="experience" className="section experience-section">
        <Reveal>
          <SectionHeading
            number="04"
            label="MY JOURNEY"
            title="Learning, building, growing."
          />
        </Reveal>

        <div className="timeline">
          <Reveal className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-date">INTERNSHIP</div>
            <div className="timeline-content">
              <span className="timeline-badge">
                PROFESSIONAL EXPERIENCE
              </span>
              <h3>Full-Stack Development Intern</h3>
              <h4>Wizzy Box Private Limited</h4>
              <p>
                Working on full-stack web development, frontend
                components, backend functionality, database
                operations, and debugging.
              </p>
              <div className="timeline-tags">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React</span>
                <span>SQL</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-date">2022 — 2026</div>
            <div className="timeline-content">
              <span className="timeline-badge">EDUCATION</span>
              <h3>Bachelor of Engineering</h3>
              <h4>Computer Science and Engineering</h4>
              <p>
                Jain College of Engineering and Research, Belagavi.
                Graduated with a CGPA of 8.12.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <Reveal>
          <div className="contact-card">
            <div className="contact-eyebrow">
              <span className="status-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <span className="contact-overline">
              HAVE A PROJECT OR AN OPPORTUNITY?
            </span>

            <h2>
              Let's make
              <br />
              <span>something meaningful.</span>
            </h2>

            <p className="contact-description">
              Looking for an opportunity to learn, contribute,
              and grow as a developer? I'd love to connect.
            </p>

            <a
              href="mailto:hanganakattianthika@gmail.com"
              className="primary-btn contact-email-btn"
            >
              <Mail size={18} />
              Get in touch
              <ArrowUpRight size={18} />
            </a>

            <SocialLinks />
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="footer-logo">
          ankitha<span>.</span>
        </a>

        <p>Designed with curiosity & built with code. © 2026 Ankitha H.</p>

        <a href="#home" className="back-to-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </main>
  );
}

export default App;
