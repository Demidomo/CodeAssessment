# Sorting the strings is less optimizing in big O 
# Instead we can create an array 
# For each of these strings, we want to count how many of each letter it contains 
# 
# 
# Hashmap is perfect, having a key and value
# Key = amount 
# Value are all the   list of anagrams aka which strings have this letter count 
#
#
# We are using the hashmap to count the characters of each string
# The output would group the anagrams together 
#
#
# Time: O(m x n x 26) = O(m x n) 
# m = total number of input strings given, n = average length of each string
# 26 is the length of count array 


class Solution(object):
    def groupAnagrams(self, strs):
        res = defaultdict(list)                 # mapping character count of each string to the list of Anagrams - 
                                                # this is a hashmap called result, 
                                                # which has been updated to expect non existing keys 
        
        for s in strs:                          # go through every string in the input 
            count = [0] * 26                    # & count every of each character it has
                                                # which will be sorted into the 26 diff arrays  
                                                # start with an empty array for each letter, it will act as a count box 
            
            
                                                # the hashmap's keys will be the count arrays 
                                                # the hashmap's values will be the strings that are anagrams to each other 
        
        
            for c in s:                         # go through every single character, and count every of each character 
                count [ord(c) - ord("a")] += 1  # using ord() to return the ASCII value of the characters in string
                                                # by default, the count will increase starting from a, by calculating the difference
                                                # from "a"'s ASCII value
                                                # If "a"'s ASCII value is 80
                                                # So "b"'s ASCII value is 81, and so forth
                
            res[tuple(count)].append(s)         # append the string s and the count together 
                                                # count is a list, but python does not allow lists to be keys 
                                                # updated to tuple, it is non-mutable in python
                
        return res.values()
          
