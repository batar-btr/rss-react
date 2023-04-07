import { render, screen } from '@testing-library/react';
import { FormsPage } from './forms';

describe('FormsPage', () => {
  it('renders the header', () => {
    render(<FormsPage />);
    expect(screen.getByText('Forms Page')).toBeInTheDocument();
  });
});
