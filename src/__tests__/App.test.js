// src/__tests__/App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For extended matchers like .toHaveClass
import App from '../components/App'; // Adjust the path as necessary

test("changes to 'dark' mode when the button is clicked", () => {
  render(<App />);

  // Click the "Dark Mode" button
  fireEvent.click(screen.getByText(/Dark Mode/));
  
  // Check if the root div has the 'dark' class
  expect(screen.getByRole('banner').parentElement).toHaveClass('dark');
});

test("changes back to 'light' mode when the button is clicked twice", () => {
  render(<App />);
  
  // Click the "Dark Mode" button twice
  fireEvent.click(screen.getByText(/Dark Mode/));
  fireEvent.click(screen.getByText(/Dark Mode/));
  
  // Check if the root div does not have the 'dark' class
  expect(screen.getByRole('banner').parentElement).not.toHaveClass('dark');
});
