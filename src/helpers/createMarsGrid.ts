export const createMarsGrid = (x: number, y: number) => {
  let mars = [];
  for (let i = 0; i <= y; i++) {
    let row = [];
    for (let j = 0; j <= x; j++) {
      row.push(0);
    }
    mars.push(row);
  }
  return mars;
};
