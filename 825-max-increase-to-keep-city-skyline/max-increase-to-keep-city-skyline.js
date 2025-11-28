/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let sum = 0; 
    let map = {}

    for (let row = 0; row < grid.length; row ++) {
        let currentRow = grid[row]
        // Get the Max Value of Row
        const maxRow = Math.max(...currentRow)

        for (let col = 0; col < grid[row].length; col ++) {
            const value = grid[row][col]
            const currentCol = grid.map(r => r[col])

            // Get the Max Value of column 
            const maxCol = Math.max(...currentCol)
            

            // Get Max of either row or column
            const trueMax = Math.min(maxRow, maxCol)
            
            const answer = trueMax - value
            sum += answer
        }
    }
    return sum
};

// Helper function for max column 

// Minimum of the max of its row and column