import { render } from "@testing-library/react";
import ProjectContext from "../src/ProjectContext";

export function renderWithProjects(ui, { projects = [], setProjects = () => {} } = {}) {
  return render(
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {ui}
    </ProjectContext.Provider>
  );
}


describe('renderWithProjects utility', () => {
  it('renders children with provided projects context', () => {
    const sampleProjects = [
      { id: 1, title: "Test Project", description: "A test project" }
    ];
    const { getByText } = renderWithProjects(
      <div>{sampleProjects[0].title}</div>,
      { projects: sampleProjects }
    );
    expect(getByText("Test Project")).toBeInTheDocument();
  });})