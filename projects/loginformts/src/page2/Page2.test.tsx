import React from 'react';
import { render, screen } from '@testing-library/react';
import Page2 from './Page2';

test('renders learn react link', () => {
  render(<Page2 />);
  const linkElement = screen.getByText(/page 2/i);
  expect(linkElement).toBeInTheDocument();
});
