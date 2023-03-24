import React, { ForwardedRef } from 'react';
import './index.css';

interface FileInputProps {
  error: boolean;
  errorMessage: string;
}

const FileInput = React.forwardRef((props: FileInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className="file-input-wrap">
      <input type="file" accept="image/*" ref={ref} />
      {!props.error && <p className="error-message">{props.errorMessage}</p>}
    </div>
  );
});

export { FileInput };
