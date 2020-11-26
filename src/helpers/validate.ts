import { validateCornerPosition } from './validateCornerPosition';
import { validateRoverMovement } from './validateRoverMovement';
import { validateRoverPostition } from './validateRoverPosition';

export const validate = (
  data: string[],
  lineNumber: number,
  gridDimensions: { l: number; w: number }
) => {
  const isCornerPosition = lineNumber === 0;
  const isRoverPosition = lineNumber % 2 !== 0 && lineNumber !== 0;

  let isValid;
  if (isCornerPosition) {
    isValid = validateCornerPosition(data);
  } else if (isRoverPosition) {
    isValid = validateRoverPostition(data, gridDimensions);
  } else {
    isValid = validateRoverMovement(data);
  }
  return isValid;
};
