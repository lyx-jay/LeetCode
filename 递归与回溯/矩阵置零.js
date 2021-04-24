/**
 * author: lyx
 */


/**1. 使用额外数组空间存储值为0的点的下标
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 let setZeroes = function(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  const zeroIndex = [];

  // 遍历矩阵，存储值为0的点的下标
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (matrix[i][j] === 0) {
              zeroIndex.push([i, j]);
          }
      }
  }
  // 遍历zeroIndex数组，将每个点所在的行和列的元素都置为0
  while (zeroIndex.length) {
      let [row, column] = zeroIndex.shift();
      for (let j = 0; j < n; j++) {
          matrix[row][j] = 0;
      }
      for (let i = 0; i < m; i++) {
          matrix[i][column] = 0;
      }
  }
  return matrix;
};


/**2. 原地置0算法
 * 第一次循环，找到0，将该行及列的首位改为0. 0出现在首行记 isR，首列记isC
 * 第二次循环，从第二行，第二列开始，只要相应行或列的首位0，该行或列改为0
 * isR、isC为 true 时，首行，首列改为0
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let isR = false, isC = false;
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (matrix[i][j] === 0) {
              i === 0 && (isR = true);
              j === 0 && (isC = true);
              matrix[0][j] = 0;
              matrix[i][0] = 0;
          }
      }
  }
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          if (matrix[i][0] === 0 || matrix[0][j] === 0) {
              matrix[i][j] = 0;
          }
      }
  }
  if (isR) {
      for (let j = 0; j < n; j++) {
          matrix[0][j] = 0;
      }
  }
  if (isC) {
      for (let i = 0; i < m; i++) {
          matrix[i][0] = 0;
      }
  }
};