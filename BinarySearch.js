// Searching for an existing target in an array 

//Index   0   1   2   3   4    5    6    7    8   
         [2] [7] [8] [9] [10] [13] [17] [19] [21] 
// left                                           Right 

// Step 1: Track left and right indices
// Step 2: Find the mid
// Step 3: Compare the target to the mid 
// Step 4: Repeat step 1 - 3 



// Binary search that's gonna take in an array and target
let nums = [2, 7, 8, 9, 10, 13, 17, 19, 21];

functoin binarySearch(array, target) { 
         return binarySearchHelper(array, target, 0, array.length - 1)
                  }

function binarySearchHelper(array, target, left, right) {
         if(left > right) { 
              return false;
         } 
// let left = 0;                         // Setting left marker 
// let right = array.length - 1;         // Setting right marker 

// while(left <= right) {                          // determining how to loop, keep searching until there isn't elements left to search 
    let mid = Math.floor((left + right) / 2)      // with each search we determine what the mid is. Add math.floor in case of decimal
    if(target === array[mid]) {                   // mid = index 4 
      return mid;                                 // return the mid value if mid value is the target 
    } else if (target < array[mid]) {             // if traget is on the left hand side of mid 
     return binarySearchHelper(array, target, left, mid - 1); 
     // right = mid - 1;                            // new right will be the index next to the mid 
    } else {                                      // otherwise if target is on the right hand side
     // left = mid + 1;                             // new left will be the index on the right of mid 
     return binarySearchHelper(array, target, mid + 1, right); 
    } 
//  } 
//   return false;                                  // false value will be returned if target cannot be found in array 
   

}


console.log(binarySearch(nums, 7)); // return 1 
console.log(binarySearch(nums, 15)); // return false 


// Time complexity: 0(log(n)), space complexity 
