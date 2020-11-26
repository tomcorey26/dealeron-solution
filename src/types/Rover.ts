import { Directions } from './Directions';

export interface RoverProps {
  startPosition: {
    x: number;
    y: number;
  };
  instructions: string;
  dir: Directions;
  x: number;
  y: number;
}

// export interface Rover {
//   startPosition: {
//     x: number;
//     y: number;
//   };
//   instructions: string;
//   dir: Directions;
//   x: number;
//   y: number;
//   changeDirection: (newDirection: Directions) => void;
// }
