class Solution:
    def totalMoney(self, n: int) -> int:
        total = 0
        week_start = 1  

        for i in range(n):
            day_of_week = i % 7  
            total += week_start + day_of_week  

            if day_of_week == 6:  
                week_start += 1  

        return total
