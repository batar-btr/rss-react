import { FormInputs } from '../Form/Form';
import { UseFormRegister, Path, FieldError, Merge } from 'react-hook-form';
import './index.css';

interface SkillsProps {
  label: Path<FormInputs>;
  register: UseFormRegister<FormInputs>;
  error?: Merge<FieldError, (FieldError | undefined)[]> | undefined;
}

const skills = ['html', 'css', 'js', 'ts', 'react'];

const Skills = ({ register, label, error }: SkillsProps) => {
  return (
    <fieldset className={error ? 'error' : ''}>
      <legend>Skills</legend>
      <div className="skills-wrapper">
        {skills.map((skill, idx) => {
          return (
            <div key={idx} className="skill-box">
              <input
                type="checkbox"
                value={skill}
                {...register(label, { required: 'Select some skills' })}
              />
              <label htmlFor="skill">{skill}</label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};

export { Skills };
