// src/__tests__/ShoppingList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingList from '../components/ShoppingList'; // Adjust the path as necessary

test('displays only items that match the selected category', () => {
  const items = [
    { name: 'Yogurt', category: 'Dairy' },
    { name: 'Pomegranate', category: 'Produce' },
    { name: 'Lettuce', category: 'Produce' },
    { name: 'String Cheese', category: 'Dairy' },
    { name: 'Cookies', category: 'Dessert' }
  ];

  render(<ShoppingList items={items} />);

  // Initially show all items
  expect(screen.getAllByRole('listitem')).toHaveLength(5);

  // Filter items
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Dessert' } });
  expect(screen.getAllByRole('listitem')).toHaveLength(1); // Ensure only 1 item is visible
});
