import React from 'react';
import {
  dateValidation,
  fileValidation,
  genderValidation,
  nameValidation,
  selectValidation,
  skillsValidation,
} from '../utils/validation-funcs';
import { FormProps } from './Form/Form';

interface ValidationProps {
  form: React.ComponentType<FormProps>;
}

export interface ValidationState {
  nameInput: boolean;
  dateInput: boolean;
  selectInput: boolean;
  skills: boolean;
  gender: boolean;
  file: boolean;
}

export interface ValidationsValues {
  nameInput: string;
  dateInput: string;
  selectInput: string;
  gender: HTMLFieldSetElement;
  skills: HTMLFieldSetElement;
  file: HTMLInputElement;
}

export default class Validation extends React.Component<ValidationProps, ValidationState> {
  constructor(props: ValidationProps) {
    super(props);
    this.state = {
      nameInput: true,
      dateInput: true,
      selectInput: true,
      skills: true,
      gender: true,
      file: true,
    };
  }

  globalValidation = (values: ValidationsValues) => {
    this.setState({
      nameInput: nameValidation(values.nameInput),
      dateInput: dateValidation(values.dateInput),
      selectInput: selectValidation(values.selectInput),
      skills: skillsValidation(values.skills),
      gender: genderValidation(values.gender),
      file: fileValidation(values.file),
    });
  };

  render() {
    const ValidateForm = this.props.form;
    return (
      <ValidateForm
        validation={this.state}
        validateHandler={(values: ValidationsValues) => this.globalValidation(values)}
        isValidate={Object.values(this.state).every((value) => value)}
      />
    );
  }
}
