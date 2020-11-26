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
  console.log(lines[0]);
  const gridDimensions = {
    w: Number(lines[0].split(' ')[0]),
    l: Number(lines[0].split(' ')[1]),
  };
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const args = line.split(' ');

    const isValid = validate(args, i, gridDimensions);
    if (!isValid) {
      return null;
    }
    allArgs.push(args);
  }

  return allArgs;
};
