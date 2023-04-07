import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ImgCardInfo } from './ImgCardInfo';

describe('Fetch Info For ModalBox', () => {
  it('Img load to document', async () => {
    const { findByRole } = render(<ImgCardInfo imgId={'testId'} closeModal={() => {}} />);
    expect(await findByRole('img')).toBeInTheDocument();
  });
});
