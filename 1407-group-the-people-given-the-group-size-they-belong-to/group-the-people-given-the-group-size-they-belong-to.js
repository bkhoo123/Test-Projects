/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let res = [];
    let map = {};

    for (let i = 0; i < groupSizes.length; i ++) {
        let curr = groupSizes[i]
        groupSizes[i] in map ? map[curr].push(i) : map[curr] = [i]
    }

    for (let key in map) {
        // Integerize Key 
        let curr = Number(key)

        // Array of the key
        let arr = map[key]

        // Grab the slice coordinates
        // let length = arr.length
        // let remainder = length / curr 
        
        // Use Helper function to divi up based on length / modulus
        const arrays = arraySlicer(arr, curr)
        console.log(arrays)

        // Push the result into the answer
        for (let i = 0; i < arrays.length; i ++) {
            res.push(arrays[i])
        }
    }

    return res
};

// Returns an array with the amount sliced 
// Will need this function to also divi it up and return multiple
const arraySlicer = (arr, slicer) => {
    let array = []
    let right = slicer 
    for (let i = 0; i < arr.length; i += slicer) {
        array.push(arr.slice(i, right))
        right += slicer
    }
    return array
}

// Map each group and its indexes together
// Use the Number on the key to determine how many groups of 1, 2, 3 
// loop through object and each key and its va lue 

// Get Array sizes created for groups 
// Get the count of group sizes and modulus divide it 
