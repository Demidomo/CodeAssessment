# Return the value K most frequent elements in the array nums 

# Input: nums = [1,1,1,2,2,3], k = 2
# Output: [1,2]
# Return the top 2 (k) frequent elements from the array
#
# Counting the number of occurances 
# Nums | Frequency/count 
# 1 --> 3
# 2 --> 2 
# 3 --> 1 
#
#
# Bucket Sort 
# In the bucket map, we have the index as the frequency/count of the nums 
#
# [1, 1, 1, 2, 2, 100] 
#   
# 
# index (count)    |  0  |  1  |  2  |  3  |  4  |  5  |  6  | 
# values           |     |[100]| [2] | [1] |     |     |     | 
# 
# Top K(2) = [1, 2] 


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}                                          # Making a hashmap the occurances of each value 
        freq = [[] for i in range(len(nums) + 1)]           # Making all the arrays, amount will be the same as how many numbers from the input + 1 

        for n in nums:                                      # Now go through every number in nums and count how many times it occurs
            count[n] = 1 + count.get(n, 0)                  # If n does not exist, return default 0 
            
        for n, c in count.items():                          # Go through each value that is counted, return the keyvalue pair
            freq[c].append(n)                               # For every value and count, have count(index) append to the values 
            
        res = []                                            # Returning the top K value 
        for i in range(len(freq) - 1, 0, -1):               # Starting on the right side of the index(frequency) by decrementing from the hgihest index count to lowest
            for n in freq[i]:                               # Go through each value in the freq, there are some that are empty
                res.append(n)                               # If the are not empty, append it to result array
                if len(res) == k:                           # If the length of the result array is equal to the K value 
                    return res                              # Return the result array 
