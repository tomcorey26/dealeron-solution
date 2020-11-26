import { directions } from './constants';

export const validateRoverPostition = (
  data: string[],
  gridDimensions: { l: number; w: number }
) => {
  if (data.length > 3) {
    alert(
      `Error: ${data.length} inputs provided for rover position, only 3 required`
    );
  }
  //check if two numbers and NESW
  const x = data[0];
  const y = data[1];
  const direction = data[2];

  if (isNaN(x as any) || isNaN(y as any)) {
    alert(
      `Incorrect rover position input (${x},${y}), please pass numbers only (check for extra spaces)`
    );
    return false;
  }

  if (Number(x) < 0 || Number(y) < 0) {
    alert(`Please provide positve numbers`);
    return false;
  }

  if (Number(x) > gridDimensions.w || Number(y) > gridDimensions.l) {
    console.log(gridDimensions);
    alert(`Rover coordinates out of bounds`);
    return false;
  }
  if (!(direction in directions)) {
    alert(
      `Incorrect rover direction input (${direction}), please pass NESW only `
    );
    return false;
  }
  return true;
};
