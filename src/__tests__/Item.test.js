// src/__tests__/Item.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure this import is present
import Item from '../components/Item'; // Adjust the path as necessary

test('the <li> has a className of "in-cart" when the Add to Cart button is clicked', () => {
  render(<Item name="Milk" category="Dairy" />);
  
  // Click the "Add to Cart" button
  fireEvent.click(screen.getByText(/Add to Cart/));
  
  // Find the <li> element
  const listItem = screen.getByText('Milk').closest('li'); // Use closest to find the <li>
  
  // Assert the class is applied
  expect(listItem).toHaveClass('in-cart');
});

