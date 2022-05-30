import React from 'react';
import { render, screen } from '@testing-library/react';
import Page1 from './Page1';

test('renders learn react link', () => {
  render(<Page1 />);
  const linkElement = screen.getByText(/page 1/i);
  expect(linkElement).toBeInTheDocument();
});
