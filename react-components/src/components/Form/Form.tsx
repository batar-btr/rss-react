import React, { FormEvent, RefObject, createRef } from 'react';
import './index.css';
import { CustomInput } from '../CustomInput/CustomInput';
import { SelectInput } from '../SelectInput/SelectInput';
import { countries } from '../../data';
import { ValidationState, ValidationsValues } from '../Validation';
import { SkillsCheckboxes } from '../SkillsCheckboxes/SkillsCheckboxes';
import { SelectGender } from '../SelectGender/SelectGender';
import { FileInput } from '../FileInput/FileInput';
import { ConfirmMessage } from '../ConfirmMessage/ConfirmMessage';

export interface FormProps {
  isValidate: boolean;
  validation: ValidationState;
  validateHandler: (values: ValidationsValues) => void;
}

export default class Form extends React.Component<FormProps> {
  nameInput: RefObject<HTMLInputElement>;
  dateInput: RefObject<HTMLInputElement>;
  selectInput: RefObject<HTMLSelectElement>;
  skills: RefObject<HTMLFieldSetElement>;
  gender: RefObject<HTMLFieldSetElement>;
  file: RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.nameInput = createRef<HTMLInputElement>();
    this.dateInput = createRef<HTMLInputElement>();
    this.selectInput = createRef<HTMLSelectElement>();
    this.skills = createRef<HTMLFieldSetElement>();
    this.gender = createRef<HTMLFieldSetElement>();
    this.file = createRef<HTMLInputElement>();
  }

  submitFormHandler = (e: FormEvent) => {
    e.preventDefault();
    const nameInputValue = this.nameInput.current?.value as string;
    const dateInputValue = this.dateInput.current?.value as string;
    const selectInputValue = this.selectInput.current?.value as string;
    const skills = this.skills.current as HTMLFieldSetElement;
    const gender = this.gender.current as HTMLFieldSetElement;
    const file = this.file.current as HTMLInputElement;
    this.props.validateHandler({
      nameInput: nameInputValue,
      dateInput: dateInputValue,
      selectInput: selectInputValue,
      skills: skills,
      gender: gender,
      file: file,
    });
  };

  render() {
    const className = this.props.isValidate ? 'react-form' : 'react-form error';
    const { validation } = this.props.validation;
    return (
      <>
        <form className={className} onSubmit={(e) => this.submitFormHandler(e)}>
          <CustomInput
            ref={this.nameInput}
            type="text"
            name="Your name"
            errorMessage="text input error"
            error={validation.nameInput}
          />
          <CustomInput
            ref={this.dateInput}
            type="date"
            name="Birthday date"
            errorMessage="date input error"
            error={validation.dateInput}
          />
          <SelectInput
            ref={this.selectInput}
            errorMessage="choose Country"
            error={validation.selectInput}
            options={countries}
          />
          <SkillsCheckboxes
            ref={this.skills}
            error={validation.skills}
            errorMessage="Choose Your Skills(at least 1)!"
          />
          <SelectGender
            ref={this.gender}
            error={validation.gender}
            errorMessage="Choose your gender!"
          />
          <FileInput error={validation.file} errorMessage="Choose file please!" ref={this.file} />
          <input type="submit" value="Submit" />
        </form>
        {this.props.validation.confirmMessage && <ConfirmMessage message="USER CREATED!!!" />}
      </>
    );
  }
}
