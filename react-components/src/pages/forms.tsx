import { useState } from 'react';
import { Form } from '../components/Form/Form';
import { UserCardList } from '../components/UserCardList/UserCardList';
import { ConfirmMessage } from '../components/ConfirmMessage/ConfirmMessage';

export interface User {
  name: string;
  birthday: string;
  country: string;
  skills: string[];
  imgURL: string;
  gender: string;
}

export interface FormPageState {
  users: User[];
}

const FormsPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const addUser = (user: User) => {
    setUsers((users) => [...users, user]);
  };

  const showmMessage = () => {
    setShowConfirm(true);
    setTimeout(() => {
      setShowConfirm(false);
    }, 3000);
  };

  return (
    <>
      <h1>Forms Page</h1>
      <Form addUser={addUser} showConfirm={showmMessage} />
      <UserCardList users={users} />
      {showConfirm && <ConfirmMessage message="User created!!!" />}
    </>
  );
};

export { FormsPage };
