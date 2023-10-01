/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let set3 = new Set(nums3)
    let res = []

    let array1 = Array.from(set1)
    let array2 = Array.from(set2)
    let array3 = Array.from(set3)

    let finalSet = new Set()

    for (let i = 0; i < array1.length; i ++) {
        if (set2.has(array1[i]) || set3.has(array1[i])) {
            finalSet.add(array1[i])
        }
    }

    for (let i = 0; i < array2.length; i ++) {
        if (set1.has(array2[i]) || set3.has(array2[i])) {
            finalSet.add(array2[i])
        }
    }
    
    for (let i = 0; i < array3.length; i ++) {
        if (set1.has(array3[i]) || set2.has(array3[i])) {
            finalSet.add(array3[i])
        }
    }
    return Array.from(finalSet)
};