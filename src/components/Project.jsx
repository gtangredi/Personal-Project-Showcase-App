import { Link } from "react-router-dom"
import ProjectContext from "../ProjectContext"
import { useContext } from "react"

export default function Project({id, title, description}) {
  const { projects, setProjects } = useContext(ProjectContext)

  const deleteProject = (id) => {
    const updatedProjects = projects.filter(project => project.id !== id)
    setProjects(updatedProjects)
  }

  return (
    <div className="project-item">
        <div className="project-del">
            <button onClick={()=>deleteProject(id)} className="delete-button">X</button>
        </div>
        <div className="project-info">
            <h3><Link to={`/projects/${id}`}>{title}</Link></h3>
            <p>{description}</p>
        </div>
    </div>
  )
}
