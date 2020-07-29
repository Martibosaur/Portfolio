import React from "react";
import { ReactComponent as Astronaut } from "../assets/images/astronaut.svg";
import { ReactComponent as Planet } from "../assets/images/planet.svg";
import Projects from "../components/projects/Projects";
import "./Home.scss";

const Home = () => {
  return (
    <div className="inner-wrapper">
      <section className="welcome container-md">
        <Astronaut id="astronaut" className="figure d-none d-md-block" />
        <Planet id="planet" className="figure d-none d-md-block" />
        <div className="message col-lg-6">
          <h1 className="font-weight-bold">Welcome</h1>
          <h5>
            My personal development portolio of the work I've done over the
            years, socials and contact information as well as the projects I've
            participated in can be found below
          </h5>
          <div className="btn-container">
            <a className="btn" href="http://github.com/" role="button">
              Github <i className="fab fa-github"></i>
            </a>
            <a className="btn" href="http://github.com/" role="button">
              Other <i className="fas fa-link"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="project-brief container-md">
        <h2>
          Projects <i className="fas fa-rocket"></i>
        </h2>
        <h5>
          Various collection of projects with links to the demos and Github
          repositories
        </h5>
      </section>
      <section className="projects container-md">
        <Projects />
      </section>
    </div>
  );
};

export default Home;
