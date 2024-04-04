/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let sum = 0;
  const n = mat.length;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (row === col || row + col === n - 1) {
        sum += mat[row][col];
      }
    }
  }

  return sum;
};