import { screen, fireEvent } from "@testing-library/react";
import AddProjectForm from "../src/components/AddProjectForm";
import { renderWithProjects } from "./test-utils";

test("adds a new project on submit", () => {
  const mockSetProjects = jest.fn();

  renderWithProjects(<AddProjectForm />, {
    projects: [],
    setProjects: mockSetProjects
  });

  const titleInput = screen.getByLabelText(/title/i);
  const descInput = screen.getByLabelText(/description/i);
  const submitBtn = screen.getByRole("button", { name: /add/i });

  fireEvent.change(titleInput, { target: { value: "New Project" } });
  fireEvent.change(descInput, { target: { value: "Testing description" } });

  fireEvent.click(submitBtn);

  expect(mockSetProjects).toHaveBeenCalledTimes(1);

  const newProjectArg = mockSetProjects.mock.calls[0][0];

  expect(typeof newProjectArg).toBe("function"); // functional update

  // inputs reset to empty
  expect(titleInput.value).toBe("");
  expect(descInput.value).toBe("");
});
