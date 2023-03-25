import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Form from './Form';
import Validation from '../Validation';

describe('<Form />', () => {
  it('Forn render', () => {
    render(<Validation form={Form} addUser={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
