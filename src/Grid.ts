import { createMarsGrid } from './helpers/createMarsGrid';
import { Rover } from './types/Rover';

export const Grid = (x: number, y: number) => {
  const grid: (Rover | null)[][] = createMarsGrid(x, y);

  const printGrid = () => {
    grid.forEach((row) => {
      console.log(row);
    });
  };

  return {
    grid,
    printGrid,
  };
};
