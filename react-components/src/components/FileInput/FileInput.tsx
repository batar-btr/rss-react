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
      <input type="file" accept="image/*" {...register(label, { required: 'add Image File' })} />
    </div>
  );
};

export { FileInput };
// import React, { ForwardedRef } from 'react';
// import './index.css';

// interface FileInputProps {
//   error: boolean;
//   errorMessage: string;
// }

// const FileInput = React.forwardRef((props: FileInputProps, ref: ForwardedRef<HTMLInputElement>) => {
//   return (
//     <div className="file-input-wrap">
//       <input type="file" accept="image/*" ref={ref} />
//       {!props.error && <p className="error-message">{props.errorMessage}</p>}
//     </div>
//   );
// });

// export { FileInput };
