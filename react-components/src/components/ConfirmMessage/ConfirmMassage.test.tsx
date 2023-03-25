import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ConfirmMessage } from './ConfirmMessage';

describe('<Confirm Message />', () => {
  it('Rehder title', () => {
    render(<ConfirmMessage message="test message" />);
    expect(screen.getByText('CONGRATULATIONS!!!!')).toBeTruthy();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
