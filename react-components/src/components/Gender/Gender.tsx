import { FormInputs } from '../Form/Form';
import { UseFormRegister, Path, FieldError } from 'react-hook-form';
import './index.css';

interface GenderProps {
  label: Path<FormInputs>;
  register: UseFormRegister<FormInputs>;
  legend: string;
  error?: FieldError;
}

const Gender = ({ label, register, legend, error }: GenderProps) => {
  return (
    <fieldset className={error ? 'error' : ''}>
      <legend>{legend}</legend>
      <div className="gender-wrap">
        <div>
          <label htmlFor="male">Male</label>
          <input
            {...register(label, { required: 'Select gender' })}
            type="radio"
            value="male"
            id="male"
          />
        </div>
        <div>
          <label htmlFor="male">Female</label>
          <input
            {...register(label, { required: 'Select gender' })}
            type="radio"
            value="female"
            id="female"
          />
        </div>
      </div>
    </fieldset>
  );
};

export { Gender };
