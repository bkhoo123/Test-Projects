class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if len(digits) == 0:
          return []

        combinations = {
          '2': ["a", "b", "c"],
          '3': ["d", "e", "f"],
          '4': ["g", "h", "i"],
          '5': ["j", "k", "l"],
          '6': ["m", "n", "o"],
          '7': ["p", "q", "r", "s"],
          '8': ["t", "u", "v"],
          '9': ["w", "x", "y", "z"]
        }

        res = [""]

        for digit in digits:
          temp = []
          
          for char in res:
            for letter in combinations[digit]:
              temp.append(char + letter)
          res = temp
        
        return res


# loop through digits 
# triple for loop 
# first loop handles the number
# second loop handles the char
# third loop handles the character combination


# 2345
# first loop handles 2
# second loop handles a
# third loop handles dgj
# combines adgj
# adgk
