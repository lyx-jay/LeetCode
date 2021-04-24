/**
 * author: lyx
 */

let generateMatrix = function(n) {
  const maxNum = n * n;
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  const directions = [[0,1], [1, 0], [0, -1], [-1, 0]];
  let directionIndex = 0;
  let row = 0, column = 0;
  let curNum = 1;
  while (curNum <= maxNum) {
      matrix[row][column] = curNum;
      curNum++;
      let nextRow = row + directions[directionIndex][0],
          nextColumn = column + directions[directionIndex][1];
      if (nextRow < 0 || nextRow >= n || nextColumn < 0 || nextColumn >= n || matrix[nextRow][nextColumn] !== 0) {
          directionIndex = (directionIndex + 1) % 4;
      }
      row = row + directions[directionIndex][0];
      column = column + directions[directionIndex][1];
  }
  return matrix;
};