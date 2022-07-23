import {render, screen} from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Test suite: Greeting component', () => {
  
  test('Greeting: renders Hello World', () => {
    // Arrange
    render(<Greeting/>);
    
    // Act
    // .. nothing - no functions calls here
    
    // Assert
    const helloWorldElement = screen.getByText('Hello World', { exact: false }); // false, weil ! noch im DOM steht
    expect(helloWorldElement).toBeInTheDocument();
  });
  
  test('Greeting: renders good to see you if the button was NOT clicked', () => {
    // Arrange
    render(<Greeting/>);
    
    // Act
    // .. nothing - no functions calls here
    
    // Assert
    const goodToSeeYouElement = screen.getByText('good to see you', { exact: false });
    expect(goodToSeeYouElement).toBeInTheDocument();
  });
  
  test('Greeting: Change text through button click', () => {
    // Arrange
    render(<Greeting/>);
    
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    
    // Assert
    const changedElement = screen.getByText('Changed', { exact: false });
    expect(changedElement).toBeInTheDocument();
  });
  
  test('Greeting: does not render "good to see you" after button click', () => {
    // Arrange
    render(<Greeting/>);
    
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    
    // Assert
    const changedElement = screen.queryByText('good to see you', { exact: false });
    expect(changedElement).toBeNull();
  });
  
});

