import { createMarsGrid } from './helpers/createMarsGrid';

export class Grid {
  grid: number[][];

  constructor(x: number, y: number) {
    this.grid = createMarsGrid(x, y);
  }

  printGrid() {
    this.grid.forEach((row) => {
      console.log(row);
    });
  }
}
