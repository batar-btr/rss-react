import { Component } from 'react';
import Validation from '../components/Validation';
import Form from '../components/Form/Form';

type FormPageProps = Record<string, never>;

interface User {
  name: string;
  birthday: string;
  country: string;
  skills: string[];
}

interface FormPageState {
  users: User[];
}

export default class FormsPage extends Component<FormPageProps, FormPageState> {
  render() {
    return (
      <>
        <h1>Forms Page</h1>
        <Validation form={Form} />
      </>
    );
  }
}
