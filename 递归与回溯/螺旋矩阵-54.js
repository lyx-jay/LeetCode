/**
 * author:lyx
 */

let spiralOrder = function (matrix) {
  if (matrix.length === 0) {return [];}
  const res = [];
  let m = matrix.length,
      n = matrix[0].length;
  // 方向数组
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  // 根据该值判断选择哪个方向
  let directionIndex = 0;
  let row = 0, column = 0;
  let i = m * n;
  while (i) {
    res.push(matrix[row][column]);
    i--;
    // 将该数推入res后，将其置为0，防止再次遍历
    matrix[row][column] = 0;
    let nextRow = row + directions[directionIndex][0],
        nextColumn = column + directions[directionIndex][1];
    // 判断 nextRow nextColumn 是否在边界条件之内
    if (nextRow < 0 || nextRow >= m || nextColumn < 0 || nextColumn >= n || matrix[nextRow][nextColumn] === 0) {
      directionIndex = (1 + directionIndex) % 4;
    }
    row = row + directions[directionIndex][0];
    column = column + directions[directionIndex][1];
  }
  return res;
}