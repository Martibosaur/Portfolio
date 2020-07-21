import React, { Fragment } from "react";
import ProjectItem from "./ProjectItem";

const data = [
  {
    id: 1,
    title: "Portfolio",
    status: "ongoing",
    desc:
      "My personal development portolio of the work I've done over the years and the current web page you're viewing",
    features: ["Authentication", "Portoflio"],
    link: {
      website: "https://github.com/",
      github: "https://github.com/",
    },
  },
  {
    id: 2,
    title: "Blog Site",
    status: "completed",
    desc:
      "A personal blogging site I am working on that allows CRUD functionality for blog posts which can be fetched via an API",
    features: ["Authentication", "Blogging Capability"],
    link: {
      website: "https://github.com/",
      github: "https://github.com/",
    },
  },
  {
    id: 3,
    title: "Admin Panel",
    status: "stopped",
    desc:
      "Administrative web panel for a FiveM game server in which they can manage their players data and issue admin actions",
    features: ["Role Based Authentication", "Moderation Tool"],
    link: {
      website: "https://github.com/",
      github: "https://github.com/",
    },
  },
];

const Projects = () => {
  return (
    <Fragment>
      {data && data.length > 0 ? (
        data.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            status={project.status}
            desc={project.desc}
            features={project.features}
            link={project.link}
          />
        ))
      ) : (
        <h2 className="text-danger">There are no projects to show...</h2>
      )}
    </Fragment>
  );
};

export default Projects;
