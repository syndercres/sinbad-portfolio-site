import "../component-styles/MainPage.css";
import sofwareIcon from "../images/clipart1971121.png";
import skillsIcon from "../images/NicePng_skills-icon-png_3463078.png";
import currentIcon from "../images/kisspng-computer-icons-portable-network-graphics-clip-art-intention-registration-svg-png-icon-free-download-5c800dc7ecd802.2350953415518960079701.png";
import EEEIcon from "../images/kisspng-computer-icons-electronics-electronic-circuit-elec-technology-companies-5ae34440036a16.294151481524843584014.png";
export default function MainPage(): JSX.Element {
  return (
    <div>
      <div className="main-page-content">
        <h1 className="title">   </h1>
        <div className="section-container">
          <div className="software section box">
            <div className="section-title">
              <h2>Software Development</h2>
              <img className="section-icon" src={sofwareIcon} alt="icon" />
            </div>

            <h3>Languages:</h3>
            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>CSS</li>
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
              <img className="section-icon" src={EEEIcon} alt="icon" />
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
            <div className="section-title">
              <h2>Skills and Qualifications</h2>
              <img className="section-icon" src={skillsIcon} alt="icon" />
            </div>
            <h3>skills:</h3>
            <ul>
              <li>Ingenuitive</li>
              <li>Creative</li>
              <li>Good team member</li>
              <li>Eye for detail</li>
            </ul>
            <h3>Qualifications:</h3>
            <ul>
              <li>Pre-U 2018: Maths D2 (A*), Physics D3 (A), English D3 (A)</li>
              <li>IGCSE 2017: Maths A*</li>
              <li>
                IGCSE 2016: Maths A, English lit A*, French A*, German A,
                Physics A*, Chemistry A*, Biology A*, DT A
              </li>
              <li>GCSE 2016: Latin A*</li>
            </ul>
          </div>
          <div className="current section box">
            <div className="section-title">
              <h2>Current Projects</h2>
              <img className="section-icon" src={currentIcon} alt="icon" />
            </div>
            <h3>Skills I'm working on:</h3>
            <ul>
              <li>Learning Python (and PyTorch)</li>
              <li>Machine learning theory</li>
              <li>Consolodating my learning in C++</li>
              <li>Using Socket.io and Ably for real time connection</li>
              <li>Doing more testing with Cypress</li>
              <li>Learning about AUTH with Firebase</li>
            </ul>
            <h3>Projects I'm working on:</h3>
            <ul>
              <li>Surfergram: still a work in progress</li>
              <li>Weather App: A better way to check wind conditions</li>
              <li>Basic machine learning projects with PyTorch</li>
              <li>Implimenting google login in previous projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
