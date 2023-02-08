
import { NavLink } from "react-router-dom"
import "../component-styles/NavBar.css"

export default function NavBar (): JSX.Element {
    return(
        <div className="nav-body">
            <h1 className="title">Hi I'm Sinbad!</h1>
            <div className="nav-buttons">
   
                <NavLink to=""><button> main page </button></NavLink>
                <NavLink to="/projects"><button> see my projects</button></NavLink>
                <NavLink to="/about-me"><button> learn about me </button></NavLink>
                <NavLink to="/contact-me"><button> contact me</button></NavLink>
            </div>
        </div>
    )
}