import { Link, useParams } from "react-router-dom"
import ProjectContext from "./ProjectContext"
import { useContext } from "react"


export default function Project() {
  const { id } = useParams()
  const { projects } = useContext(ProjectContext)
  const project = projects.find(proj => proj.id === parseInt(id))
  const formattedDate = new Date(+id).toLocaleDateString();
  return (
    <div className="project-detail">
      <Link to="/">← Back to Projects</Link>
      {project ? (
        <>
          <h2>{project.title}</h2>
          <p className="time">{formattedDate}</p>
          <p>{project.description}</p>
        </>
      ) : (
        <p>Project not found</p>
      )}
    </div>
  )
}
