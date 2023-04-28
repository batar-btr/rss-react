import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Form } from './Form';
import { Provider } from 'react-redux';
import { store } from '../../store';

const checkboxCount = 5;
const radioButtonCount = 2;

describe('<Form />', () => {
  it('Form render', () => {
    render(
      <Provider store={store}>
        <Form showConfirm={() => {}} />
      </Provider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox')).toHaveLength(checkboxCount);
    expect(screen.getAllByRole('radio')).toHaveLength(radioButtonCount);
  });
});
