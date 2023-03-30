import { FormInputs } from '../Form/Form';
import { UseFormRegister, Path } from 'react-hook-form';

interface SelectProps {
  label: Path<FormInputs>;
  register: UseFormRegister<FormInputs>;
  options: string[];
}

const Select = ({ register, options, label }: SelectProps) => {
  return (
    <select {...register(label, { required: 'Choose country!' })}>
      <option value="">--Choose Country--</option>
      {options.map((str, idx) => (
        <option value={str} key={idx}>
          {str}
        </option>
      ))}
    </select>
  );
};

export { Select };
