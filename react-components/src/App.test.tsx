import App from './App';
import { render, screen } from '@testing-library/react';
// import { describe, it } from 'vitest';

describe('App', () => {
  it('should have headline', () => {
    render(<App />);
    expect(screen.getByText(/Hello world!!/i)).toBeInTheDocument();
  });
});
