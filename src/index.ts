import { Grid } from './Grid';
import { getFormData } from './helpers/getFormData';
import { UI } from './UI';
import { createRovers } from './helpers/createRovers';
import { MarsRover } from './Rover';

const form = document.querySelector('form') as HTMLFormElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data: string[][] | null = getFormData(form);
  if (data) {
    start(data);
  }
});

const start = (data: string[][]) => {
  console.log('the data', data);
  const cornerCoords = data[0];
  const x = Number(cornerCoords[0]);
  const y = Number(cornerCoords[1]);

  let { grid, exploreGrid } = new Grid(x, y);
  UI.renderGrid(grid);

  console.log('grid', grid);
  const rovers: MarsRover[] = createRovers(data);
  console.log('the rovers', rovers);

  exploreGrid(rovers[0]);

  // console.log('rovers', rovers);
};
