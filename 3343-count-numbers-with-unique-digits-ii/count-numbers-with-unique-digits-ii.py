class Solution:
    def numberCount(self, a: int, b: int) -> int:
        count = 0

        for i in range(a, b + 1):
            if self.checkUnique(i) < len(str(i)):
                continue
            count += 1
        
        return count

    def checkUnique(self, integer):
        string = str(integer)
        new_set = set(string)
        return len(new_set)