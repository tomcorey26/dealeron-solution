import { roverMoves } from './constants';

export const validateRoverMovement = (data: string[]) => {
  // check if M L R
  let str = data[0];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!(char in roverMoves)) {
      alert(
        `Incorrect corner rover movement input ${char}, please pass MRL only`
      );
      return false;
    }
  }
  return true;
};
