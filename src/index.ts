import { Grid } from './grid';
import { getFormData } from './helpers/getFormData';
import { Directions } from './types/Directions';
import { Rover } from './types/Rover';

const form = document.querySelector('form') as HTMLFormElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data: string[] | null = getFormData(form);

  if (data) {
    start(data);
  }
  console.log(data);
});

const start = (data: string[]) => {
  const cornerCoords = data[0];
  const x = Number(cornerCoords[0]);
  const y = Number(cornerCoords[1]);

  let grid = Grid(x, y);
  let rovers: Rover[] = [];

  grid.printGrid();

  for (let i = 1; i < data.length; i += 2) {
    const roverPosition = data[i];
    const x = Number(roverPosition[0]);
    const y = Number(roverPosition[1]);
    const direction = roverPosition[2] as Directions;
    const instructions = data[i + 1];

    rovers.push({
      startPosition: { x, y },
      instructions,
      dir: direction,
      x,
      y,
    });
  }
  console.log(rovers);
};
