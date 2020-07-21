import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const ProjectItem = ({ title, status, desc, features, link }) => {
  return (
    <div className="col-lg-4">
      <div className="project">
        <div className="header">
          <h2>{title}</h2>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id={`tooltip-${status}`}>
                Status:{" "}
                <strong className={`text-capitalize tooltip-${status}`}>
                  {status}
                </strong>
              </Tooltip>
            }
          >
            <i className={`fas fa-circle tooltip-${status}`}></i>
          </OverlayTrigger>
          <div className="btn-container">
            <a href={link.website} role="button">
              <i className="fas fa-link"></i>
            </a>
            <a href={link.github} role="button">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <p>{desc}</p>
        {features && (
          <ul>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
