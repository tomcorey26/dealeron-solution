import { Directions } from './types/Directions';
import { Instruction } from './types/Instruction';
import { RoverProps } from './types/Rover';

export class MarsRover {
  startPosition: {
    x: number;
    y: number;
  };
  instructions: string;
  dir: Directions;
  x: number;
  y: number;

  constructor(props: RoverProps) {
    this.startPosition = props.startPosition;
    this.instructions = props.instructions;
    this.dir = props.dir;
    this.x = props.x;
    this.y = props.y;
  }

  changeDirection(direction: 'L' | 'R') {
    console.log(this);
    if (direction === 'L') {
      switch (this.dir) {
        case 'E':
          this.dir = 'N';
          break;
        case 'N':
          this.dir = 'W';
          break;
        case 'S':
          this.dir = 'E';
          break;
        case 'W':
          this.dir = 'S';
      }
    } else {
      switch (this.dir) {
        case 'E':
          this.dir = 'S';
          break;
        case 'N':
          this.dir = 'E';
          break;
        case 'S':
          this.dir = 'W';
          break;
        case 'W':
          this.dir = 'N';
      }
    }
  }

  moveRover() {}
}
