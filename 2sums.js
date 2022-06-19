//
// The reason why we use hashmap
// is not only to optimized big O 
// but also so we don't repeat each index/value more than once 
// brute force method 
// going through each index of the array 
// comparing 2 items by looping through the array with the sum 



// leetcode submission: 1/300

var twoSum = function(nums, target) {
    
    // hashmap out 
    let map = {};
    
    // going through the numbers 
    for (let i = 0; i < nums.length; i++) {
        
        // if the difference between target and each number in the array is in the map 
        // return that pair of number that met the above requirement
        if (target - nums[i] in map) {
                return [map[target-nums[i]], i];
            
            // otherwise keep going and just to be sure not to repeat
            // move on 
    
            } else {
                map[nums[i]] = i;
            
        }
    }
}

function twoSum(arr, S) { 
    
    // all the qualifying items will go to this array 
    var sums = [];
    
    // looping through the array 
    for (var i = 0; i < arr.length; i++) {
        
        // looping throught the array with a second defined variable in the loop
        for (var j = i + 1; j < arr.length; j++) {
        
        // if the two pairs of number add up to the sum value, push it into the sums array 
        if (arr[i] + arr[j] === S) { 
            sums.push([arr[i], arr[j]]);
          }
    
      }
    
  }

// return all the matching values in the sum   
return sums; 

} 


// 2 pass hashmap approach
// using a hashmap to input the numbers array
// the hashmap will contain the number as a key, and the index as the hashmap value 
// this way instead of looping within a loop
// we can sort through the hashmap and check for the complement

function twoSum(nums, target) {
    
    // in js, hashmap is an object where it can store key value pairs 
    
    // the number will be stored as a key
    // and the indices will be stored as the value 
    const hashMap= {}
    for (let i = 0; i < nums.length; i++) {
        
        // this will assign the numbers to the keys 
        // key of 2, will have a index value of 0 
        hashMap[nums[i]] = i; 
    }
    
    // console.log(hashMap) will show: 
    // { '2':0, '7':1, '11':2, '15':3 } 
    // key of 2, index 0 
    // key of 7, index 1 
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; 
        if(hashMap[complement] && hashMap[complement] !== i) {
            return [i, hashMap[complement]]; 
        }
        
    }
}

const nums1 = [2, 7, 11, 15]; 

console.log(twoSum(nums1, 9)); 
