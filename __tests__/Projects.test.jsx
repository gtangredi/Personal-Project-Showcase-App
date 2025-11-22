import { screen } from "@testing-library/react";
import Projects from "../src/components/Projects";
import { renderWithProjects } from "./test-utils";
import { MemoryRouter } from "react-router-dom";

test("renders a list of projects", () => {
    const sampleProjects = [
        { id: 1, title: "A", description: "A-desc" },
        { id: 2, title: "B", description: "B-desc" },
    ];

    renderWithProjects(
        <MemoryRouter>
            <Projects />
        </MemoryRouter>,
        { projects: sampleProjects }
    );

    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
});

