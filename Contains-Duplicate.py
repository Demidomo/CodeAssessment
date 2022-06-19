
#  See if there is a duplicate in the array of numbers 
#  Brute force or Sort
#  
#  Brute force:
#  Time O(n log n) 
#  Space O(1)
#  
#  Sort using Hash set to detect duplicates 
#  Q2A: Does a certain value exist?
#  Once a number is in the hashset, the next time it shows up it is a duplicafte
#  
# Time and Space: O(n)


#leetcode can be real sensitive about the indentation 
# 
# Method 1: 
# Applying hashtables 


class Solution(object):
    def containsDuplicate(self, nums):
        hashNum = {}
        for i in nums:
            if i not in hashNum:
                hashNum[i] = 1
            else:
                return True
        return False
        
  
# Method 2 -- Sorting
     l =  len(nums)
         if l < 2:
             return False
     nums.sort()
         for i in range(l-1):
         if nums[i] == nums[i+1]:
            return True
        return False



    
# Method 3 -- Set solution for python
    numsSet =  set(nums)
    if len(nums) == len(numsSet):
        return False
    return True
  
