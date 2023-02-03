import useState from "react"
import { NavLink } from "react-router-dom"


export default function NavBar (): JSX.Element {
    return(
        <div>
            <div>
                <h1>hello, nav bar</h1>
                <NavLink to="/projects">see my projects</NavLink>
            </div>
        </div>
    )
}