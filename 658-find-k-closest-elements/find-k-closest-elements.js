/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let left = 0
    let right = arr.length - k

    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if (x -arr[mid] > arr[mid + k] - x) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return arr.slice(left, left + k)
};

// [0,1,1,1,2,3,6,7,8,9]
// k = 9

// 1 - 3 = 2 distance from x measurement
// 2 - 3 = 1 distance from x measurement
// sliding window of size 4 

// 1 + 1 = 2
// 2 + 1 = 3
// 3 + 1 = 4
// 4 + 1 = 5  

// sliding window minimum 
// min heap 

// in the event of a tie I have to do some kind of nested sort logic possibly. 
// sort keys and values by lowest to highest by the value followed by the keys in the event of a tie and then sort ascending again


//[
//   [ '3', 1 ], 1
//   [ '2', 2 ], 2
//   [ '6', 2 ], 3
//   [ '1', 3 ], 4 
//   [ '7', 3 ], 5
//   [ '0', 4 ], 6
//   [ '8', 4 ], 7 
//   [ '9', 5 ]  8
// ]
