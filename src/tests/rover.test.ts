import { Grid } from '../Grid';
import { createRovers } from '../helpers/createRovers';
import { MarsRover } from '../Rover';

test('Expect test input to be expected output', async () => {
  let { exploreGrid } = new Grid(5, 5);
  const rovers: MarsRover[] = createRovers([
    ['foo'],
    ['1', '2', 'N'],
    ['LMLMLMLMM'],
    ['3', '3', 'E'],
    ['MMRMMRMRRM'],
  ]);
  const rover1 = rovers[0];
  await exploreGrid(rover1, true);

  expect(rover1.x).toBe(1);
  expect(rover1.y).toBe(3);
  expect(rover1.dir).toBe('N');

  const rover2 = rovers[1];
  await exploreGrid(rover2, true);
  expect(rover2.x).toBe(5);
  expect(rover2.y).toBe(1);
  expect(rover2.dir).toBe('E');
});

test('Expect rover not to go out of bounds', async () => {
  let { exploreGrid } = new Grid(5, 5);
  const rovers: MarsRover[] = createRovers([
    ['foo'],
    ['0', '0', 'S'],
    ['MRM'],
    ['5', '5', 'N'],
    ['MRM'],
  ]);
  const rover1 = rovers[0];
  await exploreGrid(rover1, true);

  expect(rover1.x).toBe(0);
  expect(rover1.y).toBe(0);
  expect(rover1.dir).toBe('W');

  const rover2 = rovers[1];
  await exploreGrid(rover2, true);
  expect(rover2.x).toBe(5);
  expect(rover2.y).toBe(5);
  expect(rover2.dir).toBe('E');
});
