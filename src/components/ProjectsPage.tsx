import { projectList } from "../utils/ProjectList"


export default function ProjectsPage():JSX.Element{
    return(
        <div>
            <h1>this is the projects page</h1>
            <div>
                {projectList.map((project)=> {return(
                   <div key={project.name}> 
                    <h1>{project.name}</h1>
                    </div>
                )})}
            </div>
        </div>
    )
}