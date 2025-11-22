import AddProjectForm from "./components/AddProjectForm"
import Projects from "./components/Projects"


function Home() {
    return (
        <div className="page-container">
            <main>
                <AddProjectForm />
                <Projects />
            </main>
        </div>
    )
}

export default Home