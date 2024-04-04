/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    let n = matrix.length;

    // Check each row
    for (let row = 0; row < n; row++) {
        let rowSet = new Set(Array.from({length: n}, (_, index) => index + 1));

        for (let col = 0; col < n; col++) {
            let value = matrix[row][col];
            rowSet.delete(value);
        }

        // If rowSet is not empty, some numbers were missing in the current row
        if (rowSet.size > 0) return false;
    }

    // Check each column
    for (let col = 0; col < n; col++) {
        let colSet = new Set(Array.from({length: n}, (_, index) => index + 1));

        for (let row = 0; row < n; row++) {
            let value = matrix[row][col];
            colSet.delete(value);
        }

        // If colSet is not empty, some numbers were missing in the current column
        if (colSet.size > 0) return false;
    }

    // If all rows and columns are valid, the matrix is valid
    return true;
};
