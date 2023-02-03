import { useParams } from "react-router-dom";
import { projectList } from "../utils/ProjectList";

export default function FullProjectPage():JSX.Element{
    const { key } = useParams()

    if(key){
    return(
        <div>
            <h1>full project FullProjectPage</h1>
            <p>{projectList[Number(key)].name}</p>
        </div>
    )}else{
        return <h1> error oh no </h1>
    }
}