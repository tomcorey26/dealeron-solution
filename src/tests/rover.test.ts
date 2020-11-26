import { Grid } from '../Grid';
import { createRovers } from '../helpers/createRovers';
import { MarsRover } from '../Rover';

test('Expect 1 2 N LMLMLMLMM to result in rover position 1 3 N', async () => {
  let { exploreGrid } = new Grid(5, 5);
  const rovers: MarsRover[] = createRovers([
    ['foo'],
    ['1', '2', 'N'],
    ['LMLMLMLMM'],
  ]);
  const rover = rovers[0];
  await exploreGrid(rover, true);

  expect(rover.x).toBe(1);
  expect(rover.y).toBe(3);
  expect(rover.dir).toBe('N');
});
