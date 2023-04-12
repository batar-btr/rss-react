import { UserCard } from '../UserCard/UserCard';
import './index.css';
import { useAppSelector } from '../../store/hooks';

const UserCardList = () => {
  const users = useAppSelector((state) => state.users.users);
  return (
    <div className="usercards-wrap">
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export { UserCardList };
