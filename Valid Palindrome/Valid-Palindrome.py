# Valid Palindrome
# Return true if the string is a valid palindrome
# The first and last character must be the same 
# It must read the same way after it has been reversed
# Ignore case and space for this problem

class Solution:
    def isPalindrome(self, s: str) -> bool:
        newStr = ""                 #Removing all the non alphanumeric characters from the original input string 
        
        for c in s: 
            if c.isalnum():                    # If that character is alphanumerical, which we have a built in library to check
                newStr += c.lower()            # Add it to the new string, making sure it is olower case 
        return newStr == newStr[::-1]          # With the new string, we are just gonna compare it to the reverse string 
        
        
