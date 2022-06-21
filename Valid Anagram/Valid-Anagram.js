// Q2A: Does it have the exact same characters and quantity
// if yes return true
// if no return false 
// 
// same characters && same quantity 
// 
// 1. count the ocurrances of each character
// Hashmap vs array
// S hashmap & T hashmap
// 
// the value will be the count
// the key will be the character 
// 
// S string: anagram
// Hashmap S 
// Key | Value
// a | 3
// n | 1
// g | 1
// r | 1
// m | 1
//
//
// we can then iterate through the hashmap's keys, make sure the count is the same for both hashmap/strings 

//
// Approach 1 may take up to O(s + t )

var isAmnagram = function(s, t) {
    let map = {};
    
    // right away if the lengths of the 2 strings don't even equal to each other 
    // it's gonna be false 
    if (s.length !== t.length) {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]]) {
            map[t[i]]--;
        } else {
            return false;
        }
    }
    
    return true;
}
