import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
  // Initial projects
  const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "Description of the project" },
    { id: 2, title: "Project 2", description: "Description of the project" },
    { id: 3, title: "Project 3", description: "Description of the project" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Add a new project
  const handleAddProject = (title, description) => {
    if (!title || !description) return;
    const newProject = {
      id: projects.length + 1,
      title,
      description,
    };
    setProjects([...projects, newProject]);
  };

  // Filtered projects based on search
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      <AddProjectForm onAddProject={handleAddProject} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;