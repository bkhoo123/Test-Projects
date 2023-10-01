class Solution:
    def maxCoins(self, piles: List[int]) -> int:
        piles.sort()
        bob = 0
        alice = len(piles) - 1
        brian = len(piles) - 2

        sum = 0

        while bob < brian:
            sum += piles[brian]
            bob += 1
            alice -= 2
            brian -= 2

        return sum