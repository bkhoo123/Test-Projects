/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let left = 0
    let right = arr.length - k // 1

    while (left < right) {
        let mid = Math.floor((left + right) / 2) // 0
        console.log("mid", mid)

        if (x - arr[mid] > arr[mid + k] - x) { // if 2 > 2
            left = mid + 1 // 1
            console.log("left", left)
        } else {
            right = mid // 0 
        }
    }


    return arr.slice(left, left + k)
};


// iteration #1 : 
// left = 0
// right = 0
// returns

// arr.slice(0, 4)

