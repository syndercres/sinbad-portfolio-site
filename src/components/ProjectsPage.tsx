import { NavLink } from "react-router-dom";
import { projectList } from "../utils/ProjectList";
import "../component-styles/ProjectsPage.css";

export default function ProjectsPage(): JSX.Element {
  return (
    <div className="project-page-body">
      <h1>this is the projects page</h1>
      <div className="project-container">
        {projectList.map((project) => {
          return (
            <div className="project-item" key={project.name}>
              <h1>{project.name}</h1>

              <NavLink
                className="info-button"
                to={`/full-project/${project.id}`}
              >
                <button>see more</button>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
