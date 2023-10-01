class Solution:
    def arraysIntersection(self, arr1: List[int], arr2: List[int], arr3: List[int]) -> List[int]:
        res = []

        for integer in arr1:
            if integer in arr2 and integer in arr3:
                res.append(integer)

        return res