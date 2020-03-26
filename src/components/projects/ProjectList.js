import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";
const ProjectList = ({ projects }) => {
  // if we have projects, aand if we do, do the map, if not, dont do it
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return (
            <Link to={"/project/" + project.id} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
