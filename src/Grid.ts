import { createMarsGrid } from './helpers/createMarsGrid';
import { MarsRover } from './Rover';
import { Instruction } from './types/Instruction';
import { MarsGrid } from './types/MarsGrid';
import { UI } from './UI';

export class Grid {
  grid: MarsGrid;

  constructor(x: number, y: number) {
    this.grid = createMarsGrid(x, y);
  }

  printGrid = () => {
    this.grid.forEach((row) => {
      console.log(row);
    });
  };

  async renderRoverOnGrid(rover: MarsRover) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const flip = this.grid.length - 1;
    this.grid[flip - rover.y][rover.x] = rover;
    UI.renderGrid(this.grid);
  }

  exploreGrid = async (rover: MarsRover) => {
    console.log(rover);
    await this.renderRoverOnGrid(rover);
    for (let i = 0; i < rover.instructions.length; i++) {
      const instruction = rover.instructions[i];
      console.log('hi');
      if (instruction === 'L' || instruction === 'R') {
        rover.changeDirection(instruction);
      } else {
        rover.moveRover();
      }
      await this.renderRoverOnGrid(rover);
    }
  };
}
