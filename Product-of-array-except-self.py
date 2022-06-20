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
# result    
