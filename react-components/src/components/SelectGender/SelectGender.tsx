import React, { ForwardedRef } from 'react';
import './index.css';

interface SelectGenderProps {
  error: boolean;
  errorMessage: string;
}

const SelectGender = React.forwardRef(
  (props: SelectGenderProps, ref: ForwardedRef<HTMLFieldSetElement>) => {
    return (
      <div className="gender">
        <fieldset ref={ref}>
          <legend>Gender</legend>
          <div className="gender-wrap">
            <div>
              <label htmlFor="male">Male</label>
              <input name="gender" type="radio" id="male" value="male" />
            </div>
            <div>
              <label htmlFor="female">Female</label>
              <input name="gender" type="radio" id="female" value="female" />
            </div>
          </div>
          {!props.error && <p className="error-message">{props.errorMessage}</p>}
        </fieldset>
      </div>
    );
  }
);

export { SelectGender };
