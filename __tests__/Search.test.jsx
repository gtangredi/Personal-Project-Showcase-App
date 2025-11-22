import { screen, fireEvent } from "@testing-library/react";
import Search from "../src/components/Search";
import { renderWithProjects } from "./test-utils";

test("filters projects when typing", () => {
  const sampleProjects = [
    { id: 1, title: "React App", description: "Frontend" },
    { id: 2, title: "Node API", description: "Backend" },
  ];

  const mockSetProjects = jest.fn();

  renderWithProjects(<Search />, {
    projects: sampleProjects,
    setProjects: mockSetProjects
  });

  const input = screen.getByPlaceholderText(/search projects/i);

  fireEvent.change(input, { target: { value: "react" } });

  expect(mockSetProjects).toHaveBeenCalledTimes(1);

  const filtered = mockSetProjects.mock.calls[0][0];
  expect(filtered[0].title).toBe("React App");
});
