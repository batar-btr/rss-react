import React, { ForwardedRef } from 'react';
import './index.css';

interface CustomInputProps {
  error: boolean;
  errorMessage: string;
  type: 'text' | 'date';
  name: string;
}

const CustomInput = React.forwardRef(
  (props: CustomInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className="custom-input-wrapper">
        <label htmlFor={props.name}>{props.name}</label>
        <input type={props.type} ref={ref} name={props.name} />
        {!props.error && <p className="error-message">{props.errorMessage}</p>}
      </div>
    );
  }
);

export { CustomInput };
