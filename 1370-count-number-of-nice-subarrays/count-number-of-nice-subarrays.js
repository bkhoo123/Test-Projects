/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    let count = 0;
    let left = 0;
    const originalK = k;
    let oddCount = 0;
    let subarraysEndingAtRight = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] % 2 !== 0) {
            oddCount++;
        }

        while (oddCount > k) {
            if (nums[left] % 2 !== 0) {
                oddCount--;
            }
            left++;
        }

        if (oddCount == k) {
            subarraysEndingAtRight = 1;
            let temp = left;
            while (temp < right && nums[temp] % 2 === 0) {
                subarraysEndingAtRight++;
                temp++;
            }
            count += subarraysEndingAtRight;
        }
    }

    return count;
};