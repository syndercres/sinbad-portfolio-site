import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import ContactPage from "./components/ContactPage";
import FullProjectPage from "./components/FullProjectPage";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import ProjectsPage from "./components/ProjectsPage";
import "./App.css";

function App(): JSX.Element {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/full-project/:key" element={<FullProjectPage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact-me" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
