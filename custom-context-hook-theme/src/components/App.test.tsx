import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders links', () => {
  render(<App />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
});
