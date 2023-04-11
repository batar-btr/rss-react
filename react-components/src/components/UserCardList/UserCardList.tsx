import { UserCard } from '../UserCard/UserCard';
import './index.css';
import { useAppSelector } from '../../store/hooks';

const UserCardList = () => {
  const users = useAppSelector((state) => state.users.users);
  return (
    <div className="usercards-wrap">
      {users.map((user, idx) => (
        <UserCard user={user} key={idx} />
      ))}
    </div>
  );
};

export { UserCardList };
