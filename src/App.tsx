
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import ProjectsPage from "./components/ProjectsPage";
function App(): JSX.Element {
  return (
    <div>
      <NavBar/>

      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
