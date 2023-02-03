import useState from "react"
import { NavLink } from "react-router-dom"


export default function NavBar (): JSX.Element {
    return(
        <div>
            <div>
                <h1>hello, nav bar</h1>'
                <NavLink to=""><button> main page </button></NavLink>
                <NavLink to="/projects"><button> see my projects</button></NavLink>
                <NavLink to="/about-me"><button> learn about me </button></NavLink>
                <NavLink to="/contact-me"><button> contact me</button></NavLink>
            </div>
        </div>
    )
}