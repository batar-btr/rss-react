import React, { ForwardedRef } from 'react';
import './index.css';

interface SkillsCheckBoxesProps {
  error: boolean;
  errorMessage: string;
}

const SkillsCheckboxes = React.forwardRef(
  (props: SkillsCheckBoxesProps, ref: ForwardedRef<HTMLFieldSetElement>) => {
    return (
      <div className="skills">
        <fieldset ref={ref}>
          <legend>Skills</legend>
          <div className="skills-wrapper">
            <div>
              <label htmlFor="html">HTML</label>
              <input type="checkbox" value="html" id="html" />
            </div>
            <div>
              <label htmlFor="css">CSS</label>
              <input type="checkbox" value="css" id="css" />
            </div>
            <div>
              <label htmlFor="js">JS</label>
              <input type="checkbox" value="js" id="js" />
            </div>
            <div>
              <label htmlFor="typescript">TS</label>
              <input type="checkbox" value="typescript" id="typescript" />
            </div>
            <div>
              <label htmlFor="react">REACT</label>
              <input type="checkbox" value="react" id="react" />
            </div>
          </div>
          {!props.error && <p className="error-message">{props.errorMessage}</p>}
        </fieldset>
      </div>
    );
  }
);
export { SkillsCheckboxes };
