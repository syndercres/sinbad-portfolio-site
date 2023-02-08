
export default function MainPage():JSX.Element{

    return(
        <div>
        <h1>this is the main page</h1>
        <div className="main-page-content">
            <p>Hi, I'm Sinbad, this page is a showcase of my skills!</p>
            <div className="software-section">
                <h2>Software Development</h2>
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
            </div>
            <div className="EEE-section">
                <h2>Electrical engineering</h2>
                <h3>Modules in:</h3>
                <ul>
                    <li>Mathematics</li>
                    <li>Analog and Digital electronics</li>
                    <li>Computer Architecture</li>
                    <li>Electromagnetism</li>
                    <li>Communications</li>
                    <li>Signal prossessing</li>
                </ul>
                <h3>Technologies:</h3>
                <ul>
                    <li>C++</li>
                    <li>Arduino</li>
                    <li>Verilog</li>
                    <li>Machine Code</li>
                    <li>Matlab</li>
                    <li>Simulink</li>
                </ul>
            </div>
        </div>
        </div>
    )
}