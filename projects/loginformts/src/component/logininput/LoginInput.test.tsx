import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginInput from './LoginInput';

test('renders learn react link', () => {
  render(<LoginInput />);
  const linkElement = screen.getByText(/username 1/i);
  expect(linkElement).toBeInTheDocument();
});
