import { getFormData } from './helpers/getFormData';

const form = document.querySelector('form') as HTMLFormElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data: string[] | null = getFormData(form);
  console.log(data);
});
