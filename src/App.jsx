import { useState, useEffect } from "react";
import "./App.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function App() {
  return (
    <div className="dark_theme">
      <Header />

      <main>
        <article className="container">
          <About />
          {/* <Hero /> */}
          <Skills />
          <Stats />
          <Projects />
          <Contact />
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default App;

// =================================== Header ==================================
function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem("theme") === "light_theme" ? false : true;
  });

  const [isSticky, setIsSticky] = useState(false);
  const [showGoTop, setShowGoTop] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark_theme");
      document.body.classList.remove("light_theme");
      localStorage.setItem("theme", "dark_theme");
    } else {
      document.body.classList.add("light_theme");
      document.body.classList.remove("dark_theme");
      localStorage.setItem("theme", "light_theme");
    }
  }, [isDarkTheme]);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    setIsSticky(scrollY > 10);
    setShowGoTop(scrollY > 50); // Test with a smaller number
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${isSticky ? "active" : ""}`} data-header>
        <div className="container">
          <h1 className="h1 logo">
            <a href="#">
              V<span>.</span>
            </a>
          </h1>
          <div className="navbar-actions">
            <select name="language" id="lang">
              <option value="en">En</option>
              <option value="ar">Ar</option>
            </select>
            <button
              className={`theme-btn ${isDarkTheme ? "active" : ""}`}
              aria-label="Change Theme"
              title="Change Theme"
              onClick={toggleTheme}
            >
              <span className="icon" />
            </button>
          </div>
          <button
            className="nav-toggle-btn"
            aria-label="Toggle Menu"
            title="Toggle Menu"
            data-nav-toggle-btn
          >
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </button>
          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li>
                <a href="#" className="navbar-link">
                  Home.
                </a>
              </li>
              <li>
                <a href="#about" className="navbar-link">
                  About.
                </a>
              </li>
              <li>
                <a href="#skills" className="navbar-link">
                  Skills.
                </a>
              </li>
              <li>
                <a href="#portfolio" className="navbar-link">
                  Portfolio.
                </a>
              </li>
              <li>
                <a href="#contact" className="navbar-link">
                  Contact.
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {showGoTop && (
        <a
          href="#top"
          className={`go-top ${showGoTop ? "active" : ""}`}
          data-go-top
          title="Go to Top"
        >
          <ion-icon name="arrow-up"></ion-icon>
        </a>
      )}
    </>
  );
}

// =================================== Hero =====================================
function Hero() {
  return (
    <section className="hero" id="home">
      {/* <figure className="hero-banner">
        <picture>
          <source
            srcSet="./assets/images/hero-banner.png"
            media="(min-width: 768px)"
          />
          <source
            srcSet="./assets/images/hero-banner.png"
            media="(min-width: 500px)"
          />
          <img
            src="./assets/images/victor-banner.png"
            alt="A man in a blue shirt with a happy expression"
            className="w-100"
          />
        </picture>
      </figure> */}

      <figure className="hero-banner">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e76566739f0cb2e6f261ee86b298212bbea582714088b5556b08d9c96674c24?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c"
          alt="A man in a blue shirt with a happy expression"
          className="w-100"
        />
      </figure>

      <div className="hero-content">
        <h2 className="h2 hero-title">We Design & Build Creative Products</h2>
        <a href="#contact" className="btn btn-primary">
          Get in touch
        </a>
      </div>

      <ul className="hero-social-list">
        <li>
          <a href="#" className="hero-social-link">
            <ion-icon name="logo-facebook"></ion-icon>
            <div className="tooltip">Facebook</div>
          </a>
        </li>
        <li>
          <a href="https://x.com/idam_victor_x1" className="hero-social-link">
            <ion-icon name="logo-twitter"></ion-icon>
            <div className="tooltip">Twitter</div>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/victor-idam/" className="hero-social-link">
            <ion-icon name="logo-linkedin"></ion-icon>
            <div className="tooltip">Linkedin</div>
          </a>
        </li>
      </ul>

      <a href="#stats" className="scroll-down">
        Scroll
      </a>
    </section>
  );
}

// ====================================== Stats ======================================
function Stats() {
  return (
    <section className="stats" id="stats">
      <ul className="stats-list">
        <li>
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img
                src="./assets/images/stats-card_icon-1.png"
                alt="Badge icon"
              />
            </div>

            <h2 className="h2 card-title">
              3+ <strong>Years of Experience</strong>
            </h2>

            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img
                src="./assets/images/stats-card_icon-2.png"
                alt="Checkmark icon"
              />
            </div>

            <h2 className="h2 card-title">
              10+ <strong>Completed Projects</strong>
            </h2>

            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img
                src="./assets/images/stats-card_icon-3.png"
                alt="Peoples rating icon"
              />
            </div>

            <h2 className="h2 card-title">
              5 <strong>Happy Clients</strong>
            </h2>

            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </li>
      </ul>
    </section>
  );
}

// ==================================== About ====================================
function About() {
  return (
    <section className="about" id="about">
      <figure className="about-banner">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e76566739f0cb2e6f261ee86b298212bbea582714088b5556b08d9c96674c24?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c"
          alt="A man in a alice blue shirt with a thinking expression"
          className="w-100"
        />
      </figure>

      <div className="about-content section-content">
        <p className="section-subtitle">About me</p>

        <h2 className="h3 section-title">
          Need a Creative Product? I can Help You!
        </h2>

        <p className="section-text">
          I'm a web developer with expertise in front-end technologies like
          HTML, CSS, JavaScript, and React. With experience in crafting
          high-performance, accessible web solutions, I recently contributed to
          Genesys Tech Hub, where my work on responsive components improved load
          speed by 35% and enhanced user inclusivity. My approach combines
          technical skills with a strong focus on user experience and
          collaboration.
          <p className="mb-10"></p>I graduated with first-class honors in
          Computer Science from Enugu State University of Science and
          Technology, where I was recognized as the top student in my cohort.
          I’m passionate about building efficient, user-centered web
          applications and enjoy connecting with others in the tech community to
          drive impactful projects.
        </p>

        <div className="btn-group">
          <a
            href="mailto:idamvictorscholar@gmail.com"
            className="btn btn-secondary"
          >
            Hire me
          </a>
          <a href="../src/assets/Victor_Idam_Portfolio.pdf" download className="btn btn-primary">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

// =================================== Skills ===================================
function Skills() {
  // State to manage which section (Skills/Tools) is active
  const [activeSection, setActiveSection] = useState("skills");

  // Function to toggle the active section
  const toggleSection = (section) => {
    setActiveSection(section);
  };

  // Function to toggle visibility of elements
  const elemToggleFunc = (element) => {
    element.classList.toggle("active"); // Toggle the active class
  };

  useEffect(() => {
    // Select elements for toggling
    const toggleBtnBox = document.querySelector("[data-toggle-box]");
    const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
    const skillsBox = document.querySelector("[data-skills-box]");

    // Event listener for each toggle button
    const handleToggleClick = () => {
      elemToggleFunc(toggleBtnBox);
      toggleBtns.forEach((btn) => elemToggleFunc(btn));
      elemToggleFunc(skillsBox);
    };

    // Attach event listeners to toggle buttons
    toggleBtns.forEach((btn) => {
      btn.addEventListener("click", handleToggleClick);
    });

    // Cleanup event listeners on unmount
    return () => {
      toggleBtns.forEach((btn) => {
        btn.removeEventListener("click", handleToggleClick);
      });
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <section className="skills" id="skills">
      <div className="skills-content section-content">
        <p className="section-subtitle">My skills</p>
        <h2 className="h3 section-title">
          What My Programming Skills Included?
        </h2>
        <p className="section-text">
          I develop simple, intuitive, and responsive user interfaces that help
          users get things done with less effort and time with those
          technologies.
        </p>

        <div className="skills-toggle" data-toggle-box>
          <button
            className={`toggle-btn ${
              activeSection === "skills" ? "active" : ""
            }`}
            onClick={() => toggleSection("skills")}
            data-toggle-btn
          >
            Skills
          </button>

          <button
            className={`toggle-btn ${
              activeSection === "tools" ? "active" : ""
            }`}
            onClick={() => toggleSection("tools")}
            data-toggle-btn
          >
            Tools
          </button>
        </div>
      </div>

      <div className="skills-box" data-skills-box>
        {activeSection === "skills" ? (
          <ul className="skills-list">
            {[
              { name: "HTML5", img: "./assets/images/html5.png" },
              { name: "CSS3", img: "./assets/images/css3.png" },
              { name: "JavaScript", img: "./assets/images/javascript.png" },
              { name: "TypeScript", img: "./assets/images/typescript.png" },
              { name: "React", img: "./assets/images/react.png" },
              {
                name: "Next Js",
                img: "https://cdn.builder.io/api/v1/image/assets/TEMP/a7f2403b313b286f1b57b53a153d2de95d40967d0ef155944f7b7a24e63899b6?placeholderIfAbsent=true&apiKey=2aa17bc6a73c42939c0600ac0d9e09f3",
              },
              { name: "Firebase", img: "./assets/images/firebase.png" },
              { name: "SASS", img: "./assets/images/sass.png" },
            ].map((skill) => (
              <li key={skill.name}>
                <div className="skill-card">
                  <div className="tooltip">{skill.name}</div>
                  <div className="card-icon">
                    <img src={skill.img} alt={`${skill.name} logo`} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="tools-list">
            {[
              {
                name: "Figma",
                img: "https://cdn.builder.io/api/v1/image/assets/TEMP/be93feae34fba115811df19fad52377af95c0484810b1632eeab296b7e848828?placeholderIfAbsent=true&apiKey=2aa17bc6a73c42939c0600ac0d9e09f3",
              },
              {
                name: "Zoom",
                img: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6e8e0a547382182254d0a1051f3766b7d3de87c3a8562806ea401c5b42eb436?placeholderIfAbsent=true&apiKey=2aa17bc6a73c42939c0600ac0d9e09f3",
              },
              { name: "Webpack", img: "./assets/images/webpack.png" },
              { name: "Git", img: "./assets/images/git.png" },
              { name: "Npm", img: "./assets/images/npm.png" },
              { name: "Command Line", img: "./assets/images/command.png" },
              { name: "VS Code", img: "./assets/images/vs-code.png" },
              { name: "ClickUp", img: "./assets/images/clickup.png" },
              { name: "Slack", img: "./assets/images/slack.png" },
            ].map((tool) => (
              <li key={tool.name}>
                <div className="skill-card">
                  <div className="tooltip">{tool.name}</div>
                  <div className="card-icon">
                    <img src={tool.img} alt={`${tool.name} logo`} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

// =================================== Projects ==================================
const projectsData = [
  {
    title: "Fast react  pizza",
    date: "April 2022",
    // imgSrc: "./assets/images/project-1.png",
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8db4d6838e623de3e56fbccfa060564be360b01d5c711ca7d338db2617476dea?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c",
    altText: "Fast react  pizza",
    liveLink: "https://fast-react-pizza-pv4p.vercel.app/",
    githubLink: "https://github.com/idamvictor/fast-react-pizza.git",
  },
  {
    title: "Travel list",
    date: "April 2022",
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9b0689637b55ec9bc56dc31d4e6615becc6ba5c3beb46489996705e7a6db8df4?apiKey=bc155cd4463f4c48a216b01c1991193c&",
    altText: "Travel list",
    liveLink: "https://travel-list-pied-gamma.vercel.app/",
    githubLink: "https://github.com/idamvictor/travel-list.git",
  },
  {
    title: "Serene",
    date: "April 2022",
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fd23d93063231a398566e1695391902148bf411c815ea2170718fa03edf1fb6d?placeholderIfAbsent=true&apiKey=2aa17bc6a73c42939c0600ac0d9e09f3",
    altText: "Serene",
    liveLink: "https://serene-ivory.vercel.app/",
    githubLink: "https://github.com/idamvictor/serene.git",
  },
  {
    title: "Media hub",
    date: "April 2022",
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d9c50260238f06d002d8f9a45e1bd770eca3b49ef27204cb49faeb3a800e0273?placeholderIfAbsent=true&apiKey=2aa17bc6a73c42939c0600ac0d9e09f3",
    altText: "Media hub",
    liveLink: "https://f-3.vercel.app",
    githubLink: "https://github.com/GenesysLearnable/DATA-FE-2.git",
  },
  {
    title: "Ecommerce",
    date: "April 2022",
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c29b1ce6407cfecf32cae9865795b69200dc2590796e4622e6f653a192a47d30?placeholderIfAbsent=true&apiKey=2aa17bc6a73c42939c0600ac0d9e09f3",
    altText: "Ecommerce",
    liveLink: "https://standardization-l23-g3et.vercel.app/",
    githubLink: "https://github.com/idamvictor/standardization-l23.git",
  },
  {
    title: "Omni food",
    date: "April 2022",
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/276e0ac7f8fa72fe8865d5e93280e6845a752c0fed3f030379545072ace208ae?placeholderIfAbsent=true&apiKey=2aa17bc6a73c42939c0600ac0d9e09f3",
    altText: "Omni food",
    liveLink: "https://omnifood-jet.vercel.app/",
    githubLink: "https://github.com/idamvictor/omnifood.git",
  },
  {
    title: "pig game",
    date: "April 2022",
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/979c9a0115cadc34a0331d000bfd4850a0ef077a1e034710596e7e4f53fe756a?placeholderIfAbsent=true&apiKey=2aa17bc6a73c42939c0600ac0d9e09f3",
    altText: "pig game",
    liveLink: "https://pig-game-eta-drab.vercel.app/",
    githubLink: "https://github.com/idamvictor/pig-game.git",
  },
  {
    title: "Worldwise",
    date: "April 2022",
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b5df43500cafe6e3d24cbc660c4741a98867cee4dd1e93f42b847d02af1547a8?placeholderIfAbsent=true&apiKey=2aa17bc6a73c42939c0600ac0d9e09f3",
    altText: "Worldwise",
    liveLink: "https://worldwise-self-seven.vercel.app/",
    githubLink: "https://github.com/idamvictor/worldwise.git",
  },
  {
    title: "Usepopcorn",
    date: "April 2022",
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d74ddefdfa363b7bd515da08b19d61c754e5e7599e385cfe4cecf09651602f26?placeholderIfAbsent=true&apiKey=2aa17bc6a73c42939c0600ac0d9e09f3",
    altText: "Usepopcorn",
    liveLink: "https://use-popcorn-woad.vercel.app/",
    githubLink: "https://github.com/idamvictor/usePopcorn.git",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <li className="project-card">
      <figure className="card-banner">
        <img src={project.imgSrc} className="w-100" alt={project.altText} />
      </figure>
      <div className="card-content">
        <h3 className="h4 card-title">{project.title}</h3>
        <time className="publish-date" dateTime="2022-04">
          {project.date}
        </time>

        <div className="button-container">
          <a
            href={project.liveLink}
            className="button live-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt color="black" />
          </a>
          <a
            href={project.githubLink}
            className="button github-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub color="black" />
          </a>
        </div>
      </div>
    </li>
  );
};

const Projects = () => {
  return (
    <section className="project" id="portfolio">
      <ul className="project-list">
        <li>
          <div className="project-content section-content">
            <p className="section-subtitle">My Projects</p>
            <h2 className="h3 section-title">
              See the Projects i've worked on
            </h2>
            <p className="section-text">
              We develop the best quality website that serves for the long-term.
              Responsive, Optimised, Documented and Clean
            </p>
          </div>
        </li>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}

        {/* Load More button */}
        {/* <li>
          <button className="load-more">Load more work</button>
        </li> */}
      </ul>
    </section>
  );
};

// =================================== Contact =====================================
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content section-content">
        <p className="section-subtitle">Contact</p>

        <h2 className="h3 section-title">
          Have You Any Project? Please Drop a Message
        </h2>

        <p className="section-text">
          Get in touch and let me know how i can help. Fill out the form and
          i’ll be in touch as soon as possible.
        </p>

        <ul className="contact-list">
          {/* <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="wrapper">
              <h3 className="h4 contact-item-title">Address:</h3>

              <address className="contact-info">
                941 Saqrqorish Road, alandalos, grnata, wa 47122-4194
              </address>
            </div>
          </li> */}

          {/* <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="call-outline"></ion-icon>
            </div>

            <div className="wrapper">
              <h3 className="h4 contact-item-title">Phone:</h3>

              <a href="tel:01234567789" className="contact-info">
                (01) 234 567 789
              </a>

              <a href="tel:09765432200" className="contact-info">
                (09) 765 432 200
              </a>
            </div>
          </li> */}

          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="wrapper">
              <h3 className="h4 contact-item-title">Email:</h3>

              <a href="mailto:info@jack.com" className="contact-info">
                idamvictorscholar@gmail.com
              </a>
            </div>
          </li>

          <li>
            <ul className="contac-social-list">
              {/* <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">Facebook</div>

                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li> */}

              <li>
                <a target="_blank" href="https://x.com/idam_victor_x1" className="contact-social-link">
                  <div className="tooltip">Twitter</div>

                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a target="_blank" href="https://www.linkedin.com/in/victor-idam/" className="contact-social-link">
                  <div className="tooltip">Linkedin</div>

                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>

              {/* <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">Youtube</div>

                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li> */}
            </ul>
          </li>
        </ul>
      </div>

      <form action="" className="contact-form">
        <div className="form-wrapper">
          <label htmlFor="name" className="form-label">
            Name
          </label>

          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="e.g John Doe"
              className="input-field"
            />

            <ion-icon name="person-circle"></ion-icon>
          </div>
        </div>

        <div className="form-wrapper">
          <label htmlFor="email" className="form-label">
            Email
          </label>

          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="e.g johndoe@mail.com"
              className="input-field"
            />

            <ion-icon name="mail"></ion-icon>
          </div>
        </div>

        <div className="form-wrapper">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>

          <div className="input-wrapper">
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              placeholder="Phone Number"
              className="input-field"
            />

            <ion-icon name="call"></ion-icon>
          </div>
        </div>

        <div className="form-wrapper">
          <label htmlFor="message" className="form-label">
            Message
          </label>

          <div className="input-wrapper">
            <textarea
              name="message"
              id="message"
              required
              placeholder="Write message..."
              className="input-field"
            ></textarea>

            <ion-icon name="chatbubbles"></ion-icon>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </section>
  );
}

// =================================== Footer ======================================
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="h1 logo">
          <a href="#">
            Vice<span>.</span>
          </a>
        </p>

        {/* <p className="copyright">
          &copy; 2022 <a href="#">codewithsadee</a>. All rights reserved
        </p> */}
      </div>
    </footer>
  );
}
