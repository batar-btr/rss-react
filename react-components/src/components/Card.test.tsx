import { render } from '@testing-library/react';
import { describe } from 'vitest';
import Card from './Card';
import products from '../data';

describe('Card', () => {
  it('should have headline', () => {
    const { getByTestId } = render(<Card {...products[0]} />);
    const card = getByTestId('card');
    expect(card).toBeDefined();
  });
});
