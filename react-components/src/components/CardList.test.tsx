import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import products from '../data';
import CardList from './CardList';

describe('Card', () => {
  it('List render', () => {
    const { getAllByRole } = render(<CardList cards={products} />);
    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(products.length);
    expect(screen.getByRole('list')).toBeInTheDocument();
    products.forEach((item, index) => {
      expect(listItems[index]).toHaveTextContent(item.title);
    });
  });
});
