class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        m = 0

        setter = set()

        left = 0
        for right in range(len(s)):
            while s[right] in setter:
                setter.remove(s[left])
                left += 1

            setter.add(s[right])
            
            m = max(m, right - left + 1)

        return m

## Step 1
## Determine what algos to use
## sliding window possibly hash table, using a set's size
## Variables to use (max, left pointer, right pointer)
## 