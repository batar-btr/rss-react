import { render, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { describe, it, expect, vitest } from 'vitest';

describe('SearchBar', () => {
  it('should render an input element', () => {
    const { getByRole } = render(<SearchBar setQuery={() => {}} />);
    const inputElement = getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('should update the input value when typing', () => {
    const { getByRole } = render(<SearchBar setQuery={() => {}} />);
    const inputElement = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(inputElement.value).toBe('test');
  });

  it('should call the onSubmitHandler function when the form is submitted', () => {
    const mockSetQuery = vitest.fn();
    const { getByRole } = render(<SearchBar setQuery={mockSetQuery} />);
    const inputElement = getByRole('textbox');
    const formElement = inputElement.parentElement as HTMLFormElement;
    fireEvent.submit(formElement);
    expect(mockSetQuery).toHaveBeenCalled();
  });
});
