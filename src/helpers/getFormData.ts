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

  let allArgs: string[][] = [];
  lines.forEach((line: string, idx: number) => {
    const args = line.split(' ');

    const isValid = validate(args, idx);
    if (!isValid) {
      return null;
    }
    allArgs.push(args);
  });

  return allArgs;
};
