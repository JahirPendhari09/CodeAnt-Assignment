import { render, screen, fireEvent } from "@testing-library/react";
import Dashboard from "./pages/Dashborad/index";
import { ThemeContext } from "./Context/ThemeProvider";
import { act } from "react";

describe("Dashboard Component", () => {
  test("renders basic elements", async() => {
    await act(async () => {
      render(
        <ThemeContext.Provider value={{ isSideBarVisible: false }}>
          <Dashboard />
        </ThemeContext.Provider>
      );
    });
    expect(screen.getByPlaceholderText("Search Repositories")).toBeInTheDocument();
    expect(screen.queryByText("33 total repositories")).toBeInTheDocument();
  });

  test("filters repositories on search", async() => {
    await act(async () => {
      render(
        <ThemeContext.Provider value={{ isSideBarVisible: false }}>
          <Dashboard />
        </ThemeContext.Provider>
      );
    });

    const searchInput = screen.getByPlaceholderText("Search Repositories");
    act(() => {
      fireEvent.change(searchInput, { target: { value: "design" } });
    });
    expect(screen.queryByText("No matching repositories found.")).not.toBeInTheDocument();
  });

  test("displays no results message when search yields no matches", () => {
    render(
      <ThemeContext.Provider value={{ isSideBarVisible: false }}>
        <Dashboard />
      </ThemeContext.Provider>
    );

    const searchInput = screen.getByPlaceholderText("Search Repositories");
    act(() => {
      fireEvent.change(searchInput, { target: { value: "nonexistent" } });
    });
    expect(screen.queryByText("No matching repositories found.")).toBeInTheDocument();
  });

  test("renders Refresh All button", () => {
    render(
      <ThemeContext.Provider value={{ isSideBarVisible: false }}>
        <Dashboard />
      </ThemeContext.Provider>
    )
    expect(screen.getByText("Refresh All")).toBeInTheDocument();
  });
});
