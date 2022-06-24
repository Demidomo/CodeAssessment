# Buy low sell high
# Create a solution to maximize transaction profit 

# Find the min and max 
# Profit = max - min
# Max can't be in the past 

# Two pointer, left and right
# Left = buy, right = sell

# If the right pointer is lower than left, update pointers.
# Right becomes left, right moves to next day 

# If there is a profit between the updated left and right pointers
# Move the right pointer to the right
# Move pointer to the end

# Have a profit counter, compare after each updated pointer 

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        res = 0
        
        l = 0
        for r in range(1, len(prices)):
            if prices[r] < prices[l]:
                l = r
            res = max(res, prices[r] - prices[l])
        return res
