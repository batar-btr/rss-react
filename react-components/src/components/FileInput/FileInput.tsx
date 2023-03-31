import { FormInputs } from '../Form/Form';
import { UseFormRegister, Path } from 'react-hook-form';
import './index.css';

interface FileInputProps {
  label: Path<FormInputs>;
  register: UseFormRegister<FormInputs>;
}
const FileInput = ({ register, label }: FileInputProps) => {
  return (
    <div className="file-input-wrap">
      <input type="file" accept="image/*" {...register(label, { required: 'Add Image File' })} />
    </div>
  );
};

export { FileInput };
