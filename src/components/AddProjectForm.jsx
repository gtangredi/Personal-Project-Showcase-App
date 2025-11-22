import { useContext, useState } from "react"
import ProjectContext from "../ProjectContext"


function AddProjectForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const { setProjects } = useContext(ProjectContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProject = { id: Date.now(), title, description }
    setProjects(prevProjects => [...prevProjects, newProject])
    setTitle("")
    setDescription("")
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add Project</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" rows={5} required value={description} onChange={e => setDescription(e.target.value)}></textarea>
      </div>
      <div className="form-actions">
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default AddProjectForm