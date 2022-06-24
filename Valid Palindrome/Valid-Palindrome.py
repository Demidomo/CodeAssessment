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
        
        

        
        
# Try a even more efficient method 
# Two pointer method 
# Shifting from the left and right side inwards, comparing the characters until they meet in the middle/passes each other 
# By comparing from the end, if the characters equal to each other, then right pointer is decremented by 1, left increments by 1 
# Ignore spaces except alphanumerical character 

# This will require ASCII values to determine if the character is alphanumeric
# Instaed of comparing the empty space to a character, create a while loop 
# While it is not an alphanumerical character, we increment one more time until it is alphanumeric, then we compare with the other side 


# Include the self.function if you want to call another function inside an object, you have to use the self 

class Solution:
    def isPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1                            # Two pointers, left will start on 0, right will be on the right side
        
        while l < r:                                    # While the 2 pointers have not met each other yet
            while l < r and not self.alphaNum(s[l]):    # If the left position is not alphanumeric and not passing right pointer 
                l += 1                                  # Increment to the next character over
            while r > l and not self.alphaNum(s[r]):    # Do the same for right pointer
                r -= 1
                                                        # Both the pointers will make sure if the character is alphanumeric 
                                                        # Before comparing if they are the same 
            
                        
            if s[l].lower() != s[r].lower():            # Take the character at position left and right
                return False                            # If they are not equal, we want to return immediately
            l, r = l + 1, r - 1                         # Moving the pointer inwards 
        return True
        
                                                        # Alphanumerical function, that's gonna take in a character
    def alphaNum(self, c):                              # Using the ord() function to get the ASCII value of a character
        (ord('A') <= ord(c) <= ord('Z') or              # If the character is between ASCII value A and Z
                                                        # It means it is upper case
         ord('a') <= ord(c) <= ord('z') or              # If the character is lower case 
         ord('0') <= ord(c) <= ord('9'))                # if it is a number 
                                                        # With this function, if the character is aphanumeric, it will return true
                                                        # Else it will return false 
         
                                                
         
