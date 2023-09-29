/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let combined = [...nums1, ...nums2]
    let length = combined.length
    combined.sort((a, b) => a - b)
    let oddIndex = Math.floor(length/2)
    let evenIndex = [Math.floor(length/2)-1, ((length/2))]
    let first = combined[evenIndex[0]]
    let second = combined[evenIndex[1]]
    
    let evenMedian = ((first+second) / 2)
    
    if (length % 2 === 0) return evenMedian
    else return combined[oddIndex]
    // else return combined[oddIndex]
    
};

// #1 Middle Index
// #2 Ceiling or Floor? 
// #3 if Odd or Even