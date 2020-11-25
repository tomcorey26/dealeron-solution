import { directions, roverMoves } from './constants';

const validateCornerPosition = (data: string) => {
  if (data.length > 2) {
    alert(`Error: ${data.length} inputs provided for corner, only 2 required`);
  }
  //check if not number
  for (let i = 0; i < data.length; i++) {
    let char = data[i];
    if (isNaN(char as any)) {
      alert(
        `Incorrect corner position input ${char}, please pass numbers only`
      );
      return false;
    }
  }
  return true;
};

const validateRoverPostition = (data: string) => {
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
      `Incorrect rover position input (${x},${y}), please pass numbers only`
    );
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

const validateRoverMovement = (data: string) => {
  // check if M L R
  for (let i = 0; i < data.length; i++) {
    let char = data[i];
    if (!(char in roverMoves)) {
      alert(
        `Incorrect corner rover movement input ${char}, please pass MRL only`
      );
      return false;
    }
  }
  return true;
};

export const validate = (data: string, lineNumber: number) => {
  const isCornerPosition = lineNumber === 0;
  const isRoverPosition = lineNumber % 2 !== 0 && lineNumber !== 0;

  let isValid;
  if (isCornerPosition) {
    isValid = validateCornerPosition(data);
  } else if (isRoverPosition) {
    isValid = validateRoverPostition(data);
  } else {
    isValid = validateRoverMovement(data);
  }

  return isValid;
};
