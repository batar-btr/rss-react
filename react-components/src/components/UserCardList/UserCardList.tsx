import { UserCard } from '../UserCard/UserCard';
import { User } from '../../pages/forms';
import './index.css';

interface UserCardListProps {
  users: User[];
}

const UserCardList = (props: UserCardListProps) => {
  return (
    <div className="usercards-wrap">
      {props.users.map((user, idx) => (
        <UserCard user={user} key={idx} />
      ))}
    </div>
  );
};

export { UserCardList };
