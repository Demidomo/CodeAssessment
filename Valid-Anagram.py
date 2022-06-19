# Hashmap approach

class Solution(object):
    def isAnagram(self, s, t):
        if len(s) != len(t): 
            return False
        
        countS, countT = {}, {}    
        
        for i in range(len(s)): 
            countS[s[i]] = 1 + countS.get(s[i], 0)  # if this key does not exist in the hash, the default value will return 0
            countS[t[i]] = 1 + countT.get(t[i], 0)
        for c in countS:                            # c is the key
            if countS[c] !== countT.get(c, 0):       # use get here if the k does not exist. Preventing a key error, and return 0
                return False                        # if they are not the same, we know it's false
            
        return True                                 # if both negates and null, it will be true



# no hashmap approach



class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if len(s) != len(t):
            return False
        elif sorted(s) == sorted(t):
            return True
        else:
            return False
