import { ImgCardList } from './ImgCardList';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Fetch test data in ImgList', () => {
  it('fetch and display cards', async () => {
    const { findAllByRole } = render(<ImgCardList searchValue="testValue" />);
    expect(await findAllByRole('img')).toHaveLength(10);
  });
});
