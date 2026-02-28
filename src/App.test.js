// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DataVibe title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DataVibe/i);
    expect(titleElement).toBeInTheDocument();
});
