import { NavLink } from "react-router-dom";
import githubIcon from "../images/github-icon.png";
import linkedinIcon from "../images/linkedin-icon.png";
import codewarsIcon from "../images/pngwing.com.png";
import "../component-styles/NavBar.css";

export default function NavBar(): JSX.Element {
  return (
    <div className="nav-body">
      <h1 className="title">Hi I'm Sinbad!</h1>
      <div className="nav-buttons">
        <NavLink to="">
          <button> main page </button>
        </NavLink>
        <NavLink to="/projects">
          <button> see my projects</button>
        </NavLink>
        <NavLink to="/about-me">
          <button> about me </button>
        </NavLink>
        <NavLink to="/contact-me">
          <button> contact me</button>
        </NavLink>
      </div>
      <div className="nav-icons">
        <a href="https://www.codewars.com/users/syndercres">
          <img className="icon-img" src={codewarsIcon} alt="github icon" />
        </a>
        <a href="https://github.com/syndercres">
          <img className="icon-img" src={githubIcon} alt="github icon" />
        </a>
        <a href="https://www.linkedin.com/in/syndercombe-creswell/">
          <img className="icon-img" src={linkedinIcon} alt="linkedin icon" />{" "}
        </a>
      </div>
    </div>
  );
}
