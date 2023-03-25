const nameValidation = (name: string): boolean => {
  if (name.length !== 0) {
    return name[0] === name[0].toUpperCase();
  } else {
    return false;
  }
};

const dateValidation = (date: string): boolean => !!date;

const selectValidation = (options: string): boolean => !!options;

const skillsValidation = (fieldset: HTMLFieldSetElement): boolean => {
  return [...fieldset.elements].some((elem) => {
    const input = elem as HTMLInputElement;
    return input.checked;
  });
};

const genderValidation = (fieldset: HTMLFieldSetElement): boolean => {
  return [...fieldset.elements].some((elem) => {
    const input = elem as HTMLInputElement;
    return input.checked;
  });
};

const fileValidation = (elem: HTMLInputElement) => {
  const files = elem.files as FileList;
  const file = files[0];
  return !!file;
};

export {
  nameValidation,
  dateValidation,
  selectValidation,
  skillsValidation,
  genderValidation,
  fileValidation,
};
