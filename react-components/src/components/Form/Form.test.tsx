import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Form } from './Form';

const checkboxCount = 5;
const radioButtonCount = 2;

describe('<Form />', () => {
  it('Form render', () => {
    render(<Form addUser={() => {}} showConfirm={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox')).toHaveLength(checkboxCount);
    expect(screen.getAllByRole('radio')).toHaveLength(radioButtonCount);
  });
});
