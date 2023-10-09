/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // let left = 0
    // let right = nums.length - 1
    // let res = []

    // while (left <= right) {
    //     let mid = Math.floor((left + right) / 2)

    //     if (nums[mid] < target) {
    //         left = mid + 1
    //     } else if (nums[mid] > target) {
    //         right = mid - 1
    //     } else {

    //     }
    // }
    

    let first = nums.indexOf(target)
    let last = nums.lastIndexOf(target)
    return [first, last]
};

// function binarySearch(arr, x) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);

//         if (arr[mid] === x) {
//             return mid; // Value found, return the index.
//         } else if (arr[mid] < x) {
//             left = mid + 1; // Look on the right half.
//         } else {
//             right = mid - 1; // Look on the left half.
//         }
//     }

//     return -1; // Value not found in the array.
// }

// // Example usage:
// const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
// console.log(binarySearch(sortedArray, 7));  // Outputs: 3 (because sortedArray[3] == 7)
// console.log(binarySearch(sortedArray, 8));  // Outputs: -1 (because 8 is not in the array)
