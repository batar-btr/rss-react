import { UserCard } from './UserCard';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { User } from '../../pages/forms';

const testUser: User = {
  id: 'dsfsfsaf',
  name: 'Test name',
  birthday: '01-01-2001',
  country: 'Kambodja',
  skills: ['js', 'ts'],
  gender: 'male',
  imgURL: './test.jpg',
};

describe('Test USERCARD', () => {
  it('Check User Card', () => {
    render(<UserCard user={testUser} />);
    expect(screen.getByText(testUser.name)).toBeInTheDocument();
    expect(screen.getByText(testUser.country)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
