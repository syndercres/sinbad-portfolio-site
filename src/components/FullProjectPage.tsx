import { useParams } from "react-router-dom";
import { projectList } from "../utils/ProjectList";

export default function FullProjectPage():JSX.Element{
    const { key } = useParams()

    if(key){
    return(
        <div>
            <h1>{projectList[Number(key)].name}</h1>
            <p>{projectList[Number(key)].info}</p>
            <ul>
                <li><a href={projectList[Number(key)].siteLink}> Visit the site</a></li>
                <li><a href={projectList[Number(key)].gitHubLink}>Look at the code </a></li>
            </ul>
        </div>
    )}else{
        return <h1> error oh no </h1>
    }
}