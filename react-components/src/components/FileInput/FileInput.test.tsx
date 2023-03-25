import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FileInput } from './FileInput';

describe('FileInput', () => {
  it('renders without errors', () => {
    render(<FileInput error={false} errorMessage="test message" />);
    const inputElement = screen.getByText('test message');
    expect(inputElement).toBeInTheDocument();
  });
});
