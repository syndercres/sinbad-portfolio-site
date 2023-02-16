import "../component-styles/MainPage.css";
import sofwareIcon from "../images/clipart1971121.png"
import EEEIcon from "../images/kisspng-computer-icons-electronics-electronic-circuit-elec-technology-companies-5ae34440036a16.294151481524843584014.png"
export default function MainPage(): JSX.Element {
  return (
    <div>
      <div className="main-page-content">
        <h1 className="title">This page is a showcase of my skills!</h1>
        <div className="section-container">
          <div className="software section box">
            <div className="section-title">
            <h2>Software Development</h2>
            <img
                  className="section-icon"
                  src={sofwareIcon}
                  alt="icon"
                />
            </div>
            
            <h3>Languages:</h3>
            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>PostgreSQL</li>
            </ul>
            <h3>Frameworks:</h3>
            <ul>
              <li>React</li>
              <li>Express</li>
             
            </ul>
            <h3>Technologies:</h3>
            <ul>
              <li>Github</li>
              <li>REST APIs</li>
              <li>Cypress</li>
              <li>Jest</li>
              <li>Axios</li>
            </ul>
          </div>
          <div className="EEE section box">
          <div className="section-title">
            <h2>Electrical and Electronic Engineering</h2>
            <img
                  className="section-icon"
                  src={EEEIcon}
                  alt="icon"
                />
            </div>
            <h3>Areas of study:</h3>
            <ul>
              <li>Mathematics</li>
              <li>Analog and Digital electronics</li>
              <li>Computer Architecture</li>
              <li>Electromagnetism</li>
              <li>Communications</li>
              <li>Signal prossessing</li>
              <li>Circuit analysis and design</li>
              <li>Control systems</li>
              <li>Power systems</li>
            </ul>
            <h3>Technologies:</h3>
            <ul>
              <li>C++</li>
              <li>Arduino</li>
              <li>Verilog</li>
              <li>Machine Code</li>
              <li>Matlab</li>
              <li>Simulink</li>
              <li>LTspice</li>
              <li>Quartus</li>
            </ul>
          </div>
          <div className="skills section box">
            <h2>Skills and Qualifications</h2>
            <h3>skills:</h3>
            <ul>
              <li>Hard working</li>
              <li>Ingenuitive</li>
              <li>Creative</li>
              <li>Good team member</li>
              <li>Eye for detail</li>
            </ul>
            <h3>Qualifications:</h3>
            <ul>
              <li>Food hygene level 2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
