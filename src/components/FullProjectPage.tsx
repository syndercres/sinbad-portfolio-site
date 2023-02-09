import { useParams } from "react-router-dom";
import { photoList, projectList } from "../utils/ProjectList";

export default function FullProjectPage(): JSX.Element {
  const { key } = useParams();

  if (key) {
    return (
      <div>
        <h1>{projectList[Number(key)].name}</h1>
        <p>{projectList[Number(key)].info}</p>
        <ul>
          <li>
            <a href={projectList[Number(key)].siteLink}> Visit the site</a>
          </li>
          <li>
            <a href={projectList[Number(key)].gitHubLink}>Look at the code </a>
          </li>
        </ul>

        <div className="images">
          {photoList[Number(key)].photo1 ? (
            <img
              className="image-1"
              src={photoList[Number(key)].photo1}
              alt="screenshot 1"
            ></img>
          ) : (
            <></>
          )}
          {photoList[Number(key)].photo2 ? (
            <img
              className="image-2"
              src={photoList[Number(key)].photo2}
              alt="screenshot 2"
            ></img>
          ) : (
            <></>
          )}
          {photoList[Number(key)].photo3 ? (
            <img
              className="image-3"
              src={photoList[Number(key)].photo3}
              alt="screenshot 3"
            ></img>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  } else {
    return <h1> error oh no </h1>;
  }
}
