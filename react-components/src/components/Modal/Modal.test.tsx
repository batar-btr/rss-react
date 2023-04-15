import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Modal from './Modal';

describe('Modal component', () => {
  it('should render nothing when isShowing is false', () => {
    const { container } = render(<Modal isShowing={false} hide={() => {}} />);
    expect(container.firstChild).toBeNull();
  });
});
