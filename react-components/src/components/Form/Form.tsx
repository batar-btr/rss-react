import './index.css';
import { countries } from '../../data';
import { User } from '../../pages/forms';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Select } from '../Select/Select';
import { Skills } from '../Skills/Skills';
import { Gender } from '../Gender/Gender';
import { FileInput } from '../FileInput/FileInput';
import { Error } from '../Error/Error';
import { useEffect } from 'react';

export type FormInputs = {
  name: string;
  country: string;
  skills: string[];
  gender: string;
  date: string;
  file: FileList;
};

interface FormProps {
  addUser: (user: User) => void;
  showConfirm: () => void;
}

const Form = ({ addUser, showConfirm }: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormInputs>({
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [formState, isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const { name, country, skills, gender, date, file } = data;
    addUser({
      name,
      country,
      skills,
      gender,
      birthday: date,
      imgURL: URL.createObjectURL(file[0]),
    });
    showConfirm();
  };

  return (
    <div className="react-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register('name', {
            required: { value: true, message: 'Field is required' },
            pattern: {
              value: /^[A-ZА-Я]{1}[A-Za-zА-Яа-я'']*$/,
              message: 'The first letter must be in uppercase',
            },
          })}
        />
        {errors.name && <Error message={errors.name.message} />}
        <label htmlFor="date">Date</label>
        <input type="date" id="date" {...register('date', { required: 'Set Date please!' })} />
        {errors.date && <Error message={errors.date.message} />}

        <Select options={countries} register={register} label="country" />
        {errors.country && <Error message={errors.country.message} />}

        <Skills register={register} label="skills" error={errors.skills} />
        {errors.skills && <Error message={errors.skills.message} />}

        <Gender register={register} label="gender" legend="Gender" error={errors.gender} />
        {errors.gender && <Error message={errors.gender.message} />}

        <FileInput register={register} label="file" />
        {errors.file && <Error message={errors.file?.message} />}

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export { Form };
