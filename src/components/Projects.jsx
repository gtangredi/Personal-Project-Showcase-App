import Search from "./Search";
import Project from "./Project";
import { useContext } from "react";
import ProjectContext from "../ProjectContext";

export default function Projects() {
    const { projects } = useContext(ProjectContext);

    return (
        <div className="projects">
            <div className="projects-header">
                <Search />
            </div>
            <div className="projects-list">
                {projects.map(project => (
                    <Project key={project.id} title={project.title} description={project.description} id={project.id} />
                ))}
            </div>
        </div>
    )
}
