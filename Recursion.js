// Recursion is used for problems that contain a smaler instances of the ame problem



// - Base case: smallest instance, automatically know the answer
// - Recursive case: the problem shrinks the input towards the base case 




// Write a function 'factorial' that takes a number
// as an argument and returns the factorial of that 
// number. 
//
// The factorial of 'n' is the product of all positive
// numbers from 1 to 'n'. 


factorial(1); //1
factorial(2); //2
factorial(3); //6
factorial(4); //24 
factorial(5); //120 

// factorial(n) = n * factorial(n - 1) 
// fact(4) = 4 * fact(3) 
// fact(3) = 3 * fact(2) 
// fact(2) = 2 * fact(1) 
// fact(1) base case



const factorial = (n) => {
  if (n === 1) return 1; 

  return n * factorial(n - 1) ; 
}; 




// Complex Recurision 

// sum ([a,b,c,d...]) = a + sum([b,c,d...]) 
// sum of array 

const sum = (array) => {
  if (array.length === 0) return 0; 
  const rest = array.slice(1);   //shrink the array by 1
  return array[0] + sum(rest); 
  
};

console.log(sum([1, 5, 7, -2])); 


// Time: O(n*n) = O(n^2) 
// Space: O(n) 







// instead of passing a copy 
// maintain a reference


const sum = (array) => { 
 return _sum(array, 0); 
  
};


const _sum = (array, idx) => {  //keep the top level signature the same, this is the recursive code 
 if (idx === array.length) return 0; 
 return array[idx] + _sum(array, idx +1); 


}; 

console.log(sum([1, 5, 7, -2])); 

// Time: O(n) 
// Space: O(n) 




// display the processing time 

const input = Array(9000).fill(1);

const slowStart = Date.now();
console.log(slowSum(input));
const slowEnd = Date.now(); 
console.log('n^2 finished in ${slowend - slowStart}ms');

const fastStart = Date.now();
console.log(fastSum(input));
const fasEnd = Date.now();
console.log('n finished in ${fastEnd - fastStart}ms'); 

};
