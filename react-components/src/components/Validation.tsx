import { User } from '../pages/forms';
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
  addUser: (user: User) => void;
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
    this.setState(
      {
        nameInput: nameValidation(values.nameInput),
        dateInput: dateValidation(values.dateInput),
        selectInput: selectValidation(values.selectInput),
        skills: skillsValidation(values.skills),
        gender: genderValidation(values.gender),
        file: fileValidation(values.file),
      },
      () => {
        if (Object.values(this.state).every((value) => value)) {
          const skills = [...values.skills.elements]
            .filter((elem) => {
              const input = elem as HTMLInputElement;
              return input.checked;
            })
            .map((elem) => {
              const input = elem as HTMLInputElement;
              return input.value;
            });
          const fileList = values.file.files;
          const file = fileList?.[0] as File;
          const imgURL = URL.createObjectURL(file);

          const gender = [...values.gender.elements].filter((elem) => {
            const input = elem as HTMLInputElement;
            return input.checked;
          })[0] as HTMLInputElement;

          this.props.addUser({
            name: values.nameInput,
            birthday: values.dateInput,
            country: values.selectInput,
            skills: skills,
            imgURL: imgURL,
            gender: gender.value,
          });
          values.file.form?.reset();
        }
      }
    );
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
