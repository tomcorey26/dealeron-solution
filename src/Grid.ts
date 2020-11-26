import { createMarsGrid } from './helpers/createMarsGrid';
import { MarsRover } from './Rover';
import { Instruction } from './types/Instruction';
import { MarsGrid } from './types/MarsGrid';
import { UI } from './UI';

export class Grid {
  grid: MarsGrid;
  l: number;
  w: number;

  constructor(x: number, y: number) {
    this.grid = createMarsGrid(x, y);
    this.l = x;
    this.w = y;
  }

  printGrid = () => {
    this.grid.forEach((row) => {
      console.log(row);
    });
  };

  resetGrid = () => {
    this.grid = createMarsGrid(this.l, this.w);
  };

  renderRoverOnGrid = async (rover: MarsRover) => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    this.resetGrid();
    const flip = this.grid.length - 1;
    this.grid[flip - rover.y][rover.x] = rover;
    UI.renderGrid(this.grid);
  };

  exploreGrid = async (rover: MarsRover) => {
    await this.renderRoverOnGrid(rover);
    for (let i = 0; i < rover.instructions.length; i++) {
      const instruction = rover.instructions[i];
      if (instruction === 'L' || instruction === 'R') {
        rover.changeDirection(instruction);
      } else {
        rover.moveRover();
      }
      await this.renderRoverOnGrid(rover);
    }
  };
}
