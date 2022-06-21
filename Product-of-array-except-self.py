# Product of array except self 
# No divisions, must be O(n) 
#
#
# [ 1, 2, 3, 4]
# For example, to get the output of 3
# We can get the product of every value before 3, and get product of every value after 3, multiply them together 
# Prefix = product of values before that number 
# Postfix = product of values after that number 
# Output = an array of products of prefix and postfix, in the correct order 
# 
# Prefix: Take the input and multiply the prefix on the left 
# Postfix: Take the input and multiply the postfix on the right 
# Result: Product of the prefix on the left and the postfix on the right 
# 
# input    |  1  |  2  |  3  |  4  | 
# prefix   |  1  |  2  |  6  |  24 |
# postfix     24    24    12    4
#
# to save memory, instead of producing prefix and postfi x
# we can have the product of the pairing prefix and postfix as the result output 



class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1] * (len(nums))         # Create a result array, which will be the output 
                                        # This will contain as much arrays as the length of input array
        
        prefix = 1                      # Initialize prefix as 1 
        for i in range(len(nums)):      # and go through every position in the input array 
            res[i] = prefix             # For each position in the result array 
            prefix *= nums[i]           # Put the prefix in the result array position 
                                        # So we can save memory from creating a prefix array 
        
        
        postfix = 1                                 # Initialize postfix as 1 
        for i in range(len(nums)  -1, -1, -1):      # now we go through backwards from the right side   
            res[i] *= postfix                       # multiply postfix to the result array 
            postfix *= nums[i]                      # continuously update the postfix by multiplying the                                                         # input array 
        return res
