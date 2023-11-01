/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let map = new Map()
    let answer = []

    for (let i = 0; i < arr.length; i ++) {
        let distance = Math.abs(arr[i] - x)
        map.set(i, distance)
    }

    let hashmap = Object.fromEntries(map)
    let entries = Object.entries(hashmap)

    

    let result = entries.sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1]
        }
        return hashmap[a[0]] - hashmap[b[0]]
    })


    for (let i = 0; i < k; i ++) {
        answer.push(arr[Number(result[i][0])])// the actual thing goes here
    }
    return answer.sort((a, b) => a - b)
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
