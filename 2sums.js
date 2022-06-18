
// brute force method 
// going through each index of the array 
// comparing 2 items by looping through the array with the sum 

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
