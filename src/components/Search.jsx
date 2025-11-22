import { useContext } from "react";
import ProjectContext from "../ProjectContext";

export default function Search() { 
  const { projects, setProjects } = useContext(ProjectContext)

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filteredProjects = projects.filter(project => project.title.toLowerCase().includes(query) || project.description.toLowerCase().includes(query));
    setProjects(filteredProjects);
  }

  return (
    <input type="text" placeholder="Search Projects" onChange={handleSearch} />
  )
}
