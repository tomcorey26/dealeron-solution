import { validate } from './validate';

export const getFormData = (form: HTMLFormElement) => {
  const input = form.querySelector('textarea') as HTMLTextAreaElement;

  const lines = input.value.trim().split('\n');

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
