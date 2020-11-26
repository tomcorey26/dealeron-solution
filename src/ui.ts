import { MarsRover } from './Rover';
import { MarsGrid } from './types/MarsGrid';

export class UI {
  static displayError(error: string) {
    alert(error);
  }

  static renderGrid(grid: MarsGrid) {
    let output = document.getElementById('grid') as HTMLDivElement;

    let html = '';
    grid.forEach((row) => {
      html += '<div class="row">';
      row.forEach((square) => {
        if (square) {
          let rover;
          if (square.dir === 'S') {
            rover = 'v';
          } else if (square.dir === 'N') {
            rover = '^';
          } else if (square.dir === 'E') {
            rover = '>';
          } else if (square.dir === 'W') {
            rover = '<';
          }
          html += `<div class="square"><div class="rover">${rover}</div> </div>`;
        } else {
          html += '<div class="square"> </div>';
        }
      });
      html += '</div>';
    });

    output.innerHTML = html;
  }

  static renderRoverResult(rover: MarsRover) {
    const div = document.getElementById('rover-output') as HTMLDivElement;
    const roverCount = document.querySelectorAll('.rover-position').length;
    const text = `Rover ${roverCount + 1}: ${rover.x} ${rover.y} ${rover.dir}`;
    const newDiv = document.createElement('div');
    newDiv.className = 'rover-position';
    newDiv.innerText = text;

    div.appendChild(newDiv);
  }

  static clearRoverResults() {
    const div = document.getElementsByClassName('rover-position');
    while (div[0]) {
      if (div[0].parentNode) {
        div[0].parentNode.removeChild(div[0]);
      }
    }
  }
}
