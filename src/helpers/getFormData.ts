import { validate } from './validate';

export const getFormData = (form: HTMLFormElement) => {
  const input = form.querySelector('textarea') as HTMLTextAreaElement;

  const lines = input.value.trim().split('\n');

  if (lines.length < 4) {
    alert(`only ${lines.length} inputs given, 4 or more required`);
    return null;
  }
  // check if each rover has instructions and position passed
  if ((lines.length - 1) % 2 !== 0) {
    alert('Missing Rover instructions or position');
    return null;
  }

  let lineArr: string[] = [];
  lines.forEach((line: string, idx: number) => {
    const str = line.split(' ').join('');

    const isValid = validate(str, idx);
    if (!isValid) {
      return null;
    }
    lineArr.push(str);
  });

  return lineArr;
};
