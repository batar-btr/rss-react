import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { User } from '../../pages/forms';
import { UserCardList } from './UserCardList';

describe('UserCardList', () => {
  const testUsers: User[] = [
    {
      name: 'Alice',
      birthday: '1990-01-01',
      country: 'USA',
      skills: ['JavaScript', 'React'],
      imgURL: 'https://example.com/image1.jpg',
      gender: 'female',
    },
    {
      name: 'Bob',
      birthday: '1995-05-05',
      country: 'Canada',
      skills: ['Java', 'Python'],
      imgURL: 'https://example.com/image2.jpg',
      gender: 'male',
    },
  ];

  it('renders a UserCard for each user', () => {
    const { getAllByTestId } = render(<UserCardList users={testUsers} />);
    const userCards = getAllByTestId('user-card');

    expect(userCards).toHaveLength(testUsers.length);
  });

  it('renders UserCard with correct user prop', () => {
    const { getAllByTestId } = render(<UserCardList users={testUsers} />);
    const userCards = getAllByTestId('user-card');

    userCards.forEach((card) => {
      expect(card).toHaveAttribute('data-testid', 'user-card');
    });
  });
});
