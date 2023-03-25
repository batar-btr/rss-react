import { SelectInput } from './SelectInput';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { countries } from '../../data';

const error = true;
const errorMessage = 'test error message';

describe('Select render', () => {
  it('it should render right option count', () => {
    render(<SelectInput error={error} errorMessage={errorMessage} options={countries} />);
    const optionsCount = screen.getAllByRole('option').length;
    expect(optionsCount).toBe(countries.length + 1);
  });
});
