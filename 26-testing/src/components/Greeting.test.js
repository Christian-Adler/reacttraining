import {render, screen} from "@testing-library/react";
import Greeting from "./Greeting";

test('Greeting: renders Hello World', () => {
  // Arrange
  render(<Greeting/>);
  
  // Act
  // .. nothing - no functions calls here
  
  // Assert
  const helloWorldElement = screen.getByText('Hello World', { exact: false }); // false, weil ! noch im DOM steht
  expect(helloWorldElement).toBeInTheDocument();
});
