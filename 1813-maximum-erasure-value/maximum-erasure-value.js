/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let left = 0;
    let maxSum = 0;
    let currentSum = 0;
    let uniqueElements = new Set();

    for (let right = 0; right < nums.length; right++) {
        while (uniqueElements.has(nums[right])) {
            // Remove elements from the left of the window
            currentSum -= nums[left];
            uniqueElements.delete(nums[left]);
            left++;
        }

        // Add the current element to the set and sum
        uniqueElements.add(nums[right]);
        currentSum += nums[right];

        // Update the maximum sum
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
