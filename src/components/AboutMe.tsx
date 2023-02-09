
import "../component-styles/AboutMe.css";
import { funPhotos } from "../utils/ProjectList";
export default function AboutMe(): JSX.Element {
  return (
    <div>
      <h1>about me page</h1>

      <div>
        <p>
          Hi I'm Sinbad! I'm an Electrical Engineer, Software Developer and
          extreme sports enthusiast
        </p>
  
      </div>
      <div className="photo-grid">
        {funPhotos.map((photo)=>{
          return(
            <img className="photo-item box" key={photo} src={photo} alt={photo} />
          )
        })}
      </div>
    </div>
  );
}
