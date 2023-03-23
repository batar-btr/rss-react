import { Component } from 'react';
import Validation from '../components/Validation';
import Form from '../components/Form/Form';
import { UserCardList } from '../components/UserCardList/UserCardList';

type FormPageProps = Record<string, never>;

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

export default class FormsPage extends Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);
    this.state = {
      users: [],
    };
  }

  addUser = (user: User) => {
    this.setState({ users: [...this.state.users, user] });
  };

  render() {
    return (
      <>
        <h1>Forms Page</h1>
        <Validation form={Form} addUser={this.addUser} />
        <UserCardList users={this.state.users} />
      </>
    );
  }
}
