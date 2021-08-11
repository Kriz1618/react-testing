import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test('Renders "hello world" as a text', () => {
    render(<Greeting />);

    // assert
    const helloWorldElement = screen.getByText("Hello world", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('Renders "Nice to see you again" when button is not clicked', () => {
    render(<Greeting />);

    const pElement = screen.getByText("Nice to see you again", {
      exact: false,
    });
    expect(pElement).toBeInTheDocument();
  });

  test('Renders "Changed" if the button is clicked', () => {
    render(<Greeting />);

    const buttonClick = screen.getByRole("button");
    userEvent.click(buttonClick);

    const pElement = screen.getByText("Changed!");

    expect(pElement).toBeInTheDocument();
  });

  test('Should not renders "Nice to see you again" when button was clicked', () => {
    render(<Greeting />);

    const buttonClick = screen.getByRole("button");
    userEvent.click(buttonClick);

    const pElement = screen.queryByText("Nice to see you again", {
      exact: false,
    });

    expect(pElement).not.toBeInTheDocument();
  });

  test('Should not renders "Changed" if the button was not clicked', () => {
    render(<Greeting />);

    const pElement = screen.queryByText("Changed!");

    expect(pElement).not.toBeInTheDocument();
  });
});
