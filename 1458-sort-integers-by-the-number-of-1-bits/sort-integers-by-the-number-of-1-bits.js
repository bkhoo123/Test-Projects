/**
 * @param {number[]} arr
 * @return {number[]}
 */
function sortByBits(arr) {
    // Helper function to count number of 1 bits
    function countBits(num) {
        let count = 0;
        while (num) {
            count += num & 1;  // Checks the least significant bit
            num >>= 1;  // Right shifts the number by 1
        }
        return count;
    }
    
    // Sort using custom comparator
    return arr.sort((a, b) => {
        const countA = countBits(a);
        const countB = countBits(b);
        
        // If counts are equal, compare numbers themselves
        if (countA === countB) {
            return a - b;
        }
        return countA - countB;  // Otherwise, compare based on counts
    });
}
