import { Directions } from './Directions';

export interface Rover {
  startPosition: {
    x: number;
    y: number;
  };
  instructions: string;
  dir: Directions;
  x: number;
  y: number;
}
