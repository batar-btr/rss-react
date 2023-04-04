import {
  nameValidation,
  dateValidation,
  selectValidation,
  skillsValidation,
  genderValidation,
} from './validation-funcs';

describe('nameValidation', () => {
  it('returns true if the first letter is capitalized', () => {
    expect(nameValidation('John')).toBe(true);
  });

  it('returns false if the first letter is not capitalized', () => {
    expect(nameValidation('john')).toBe(false);
  });

  it('returns false if the input is empty', () => {
    expect(nameValidation('')).toBe(false);
  });
});

describe('dateValidation', () => {
  it('returns true if the input is not empty', () => {
    expect(dateValidation('2022-01-01')).toBe(true);
  });

  it('returns false if the input is empty', () => {
    expect(dateValidation('')).toBe(false);
  });
});

describe('selectValidation', () => {
  it('returns true if the input is not empty', () => {
    expect(selectValidation('option1')).toBe(true);
  });

  it('returns false if the input is empty', () => {
    expect(selectValidation('')).toBe(false);
  });
});

describe('skillsValidation', () => {
  it('returns true if at least one checkbox is checked', () => {
    const fieldset = document.createElement('fieldset');
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    input1.type = 'checkbox';
    input1.checked = true;
    input2.type = 'checkbox';
    input2.checked = false;
    fieldset.appendChild(input1);
    fieldset.appendChild(input2);

    expect(skillsValidation(fieldset)).toBe(true);
  });

  it('returns false if no checkbox is checked', () => {
    const fieldset = document.createElement('fieldset');
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    input1.type = 'checkbox';
    input1.checked = false;
    input2.type = 'checkbox';
    input2.checked = false;
    fieldset.appendChild(input1);
    fieldset.appendChild(input2);

    expect(skillsValidation(fieldset)).toBe(false);
  });
});

describe('genderValidation', () => {
  it('returns true if at least one radio button is checked', () => {
    const fieldset = document.createElement('fieldset');
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    input1.type = 'radio';
    input1.checked = true;
    input2.type = 'radio';
    input2.checked = false;
    fieldset.appendChild(input1);
    fieldset.appendChild(input2);

    expect(genderValidation(fieldset)).toBe(true);
  });

  it('returns false if no radio button is checked', () => {
    const fieldset = document.createElement('fieldset');
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    input1.type = 'radio';
    input1.checked = false;
    input2.type = 'radio';
    input2.checked = false;
    fieldset.appendChild(input1);
    fieldset.appendChild(input2);

    expect(genderValidation(fieldset)).toBe(false);
  });
});
