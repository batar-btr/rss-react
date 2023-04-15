import { useState } from 'react';
import { Form } from '../components/Form/Form';
import { UserCardList } from '../components/UserCardList/UserCardList';
import { ConfirmMessage } from '../components/ConfirmMessage/ConfirmMessage';

export interface User {
  id: string;
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
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const showmMessage = () => {
    setShowConfirm(true);
    setTimeout(() => {
      setShowConfirm(false);
    }, 3000);
  };

  return (
    <>
      <h1>Forms Page</h1>
      <Form showConfirm={showmMessage} />
      <UserCardList />
      {showConfirm && <ConfirmMessage message="User created!!!" />}
    </>
  );
};

export { FormsPage };
