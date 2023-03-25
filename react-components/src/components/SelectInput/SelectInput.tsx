import React, { ForwardedRef } from 'react';
import './index.css';

interface SelectInputProps {
  options: string[];
  error: boolean;
  errorMessage: string;
}

const SelectInput = React.forwardRef(
  (props: SelectInputProps, ref: ForwardedRef<HTMLSelectElement>) => {
    return (
      <div className="select-input-wrapper">
        <select ref={ref}>
          <option value="">--Select a country--</option>
          {props.options.map((str, idx) => (
            <option key={idx} value={str}>
              {str}
            </option>
          ))}
        </select>
        {!props.error && <p className="error-message">{props.errorMessage}</p>}
      </div>
    );
  }
);

export { SelectInput };
