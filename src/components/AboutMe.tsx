import skate from "../images/skate.png";
import "../component-styles/AboutMe.css";

export default function AboutMe(): JSX.Element {
  return (
    <div>
      <h1>about me page</h1>

      <div>
        <p>
          Hi I'm Sinbad! I'm an Electrical Engineer, Software Developer and
          extreme sports enthusiast
        </p>
        <img src={skate} alt="Me skating"></img>
      </div>
    </div>
  );
}
