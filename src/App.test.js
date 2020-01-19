import React from 'react';
import { render, within } from "@testing-library/react";
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/submit/i);
  expect(linkElement).toBeInTheDocument();
});
