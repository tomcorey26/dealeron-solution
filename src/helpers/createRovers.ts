import { Directions } from '../types/Directions';
import { MarsRover } from '../Rover';

export const createRovers = (data: string[][]) => {
  let rovers: MarsRover[] = [];
  for (let i = 1; i < data.length; i += 2) {
    const roverPosition = data[i];
    const x = Number(roverPosition[0]);
    const y = Number(roverPosition[1]);
    const direction = roverPosition[2] as Directions;
    const instructions = data[i + 1][0];

    const rover = new MarsRover({
      startPosition: { x, y },
      instructions,
      dir: direction,
      x,
      y,
    });

    rovers.push(rover);
  }

  return rovers;
};
